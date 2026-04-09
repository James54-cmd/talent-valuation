insert into public.benchmark_roles (slug, title, category) values
  ('software-engineer', 'Software Engineer', 'technology'),
  ('senior-software-engineer', 'Senior Software Engineer', 'technology'),
  ('customer-service-representative', 'Customer Service Representative', 'bpo'),
  ('data-analyst', 'Data Analyst', 'technology'),
  ('product-manager', 'Product Manager', 'technology'),
  ('accountant', 'Accountant', 'finance'),
  ('hr-specialist', 'HR Specialist', 'people'),
  ('virtual-assistant', 'Virtual Assistant', 'operations'),
  ('registered-nurse', 'Registered Nurse', 'healthcare'),
  ('graphic-designer', 'Graphic Designer', 'creative')
on conflict (slug) do update set
  title = excluded.title,
  category = excluded.category;

insert into public.benchmark_dimensions (dimension_type, slug, label, sort_order) values
  ('location', 'metro-manila', 'NCR / Metro Manila', 1),
  ('location', 'cebu', 'Cebu', 2),
  ('location', 'davao', 'Davao', 3),
  ('location', 'other-ph', 'Other Philippine region', 4),
  ('experience', 'fresh-grad', 'Fresh Grad (0-1 years)', 1),
  ('experience', 'junior', 'Junior (1-3 years)', 2),
  ('experience', 'mid', 'Mid (3-5 years)', 3),
  ('experience', 'senior', 'Senior (5-8 years)', 4),
  ('experience', 'lead', 'Lead (8+ years)', 5),
  ('industry', 'bpo', 'BPO', 1),
  ('industry', 'tech', 'Tech', 2),
  ('industry', 'finance', 'Finance', 3),
  ('industry', 'government', 'Government', 4),
  ('industry', 'healthcare', 'Healthcare', 5),
  ('industry', 'ecommerce', 'E-commerce', 6),
  ('industry', 'other', 'Others', 7),
  ('work_setup', 'onsite', 'Onsite', 1),
  ('work_setup', 'hybrid', 'Hybrid', 2),
  ('work_setup', 'remote-ph', 'Remote (PH-based)', 3),
  ('work_setup', 'remote-intl', 'Remote (International client)', 4),
  ('company_type', 'local-sme', 'Local SME', 1),
  ('company_type', 'mnc', 'Multinational (MNC)', 2),
  ('company_type', 'startup', 'Startup', 3),
  ('skill', 'excel', 'Excel', 1),
  ('skill', 'customer-support', 'Customer Support', 2),
  ('skill', 'sales', 'Sales', 3),
  ('skill', 'sql', 'SQL', 4),
  ('skill', 'figma', 'Figma', 5),
  ('skill', 'bookkeeping', 'Bookkeeping', 6),
  ('skill', 'recruitment', 'Recruitment', 7),
  ('skill', 'react', 'React', 8),
  ('skill', 'nodejs', 'Node.js', 9),
  ('skill', 'medical-coding', 'Medical Coding', 10),
  ('skill', 'tableau', 'Tableau', 11),
  ('skill', 'project-management', 'Project Management', 12)
on conflict (dimension_type, slug) do update set
  label = excluded.label,
  sort_order = excluded.sort_order,
  is_active = true,
  updated_at = now();

insert into public.source_batches (name, source_type, notes, published_on, is_active) values
  (
    'PH salary benchmark launch batch',
    'normalized_seed',
    'Seeded MVP benchmark data using the strongest currently accepted and auditable Philippine-market rows for launch.',
    date '2026-04-01',
    true
  )
on conflict do nothing;

insert into public.methodology_snapshots (version, title, summary, content, is_current) values
  (
    '2026.04-v1',
    'Philippine salary benchmark methodology',
    'Monthly-first salary estimation for the Philippines using role benchmarks plus local market adjustments.',
    jsonb_build_object(
      'principles', jsonb_build_array(
        'Monthly gross is primary.',
        'Annual values are secondary and include 13th month pay.',
        'Ranges are shown instead of false precision.',
        'Location, work setup, company type, and industry are first-class inputs.'
      ),
      'formula', jsonb_build_object(
        'base', 'role benchmark',
        'adjustments', jsonb_build_array('experience', 'location', 'industry', 'work setup', 'company type', 'skills'),
        'range', 'p25 to p75 monthly gross'
      )
    ),
    true
  )
on conflict (version) do update set
  title = excluded.title,
  summary = excluded.summary,
  content = excluded.content,
  is_current = excluded.is_current;

with selected_source_batch as (
  select id
  from public.source_batches
  where name = 'PH salary benchmark launch batch'
  order by imported_at desc
  limit 1
)
insert into public.salary_benchmarks (
  role_id,
  location_id,
  experience_id,
  industry_id,
  work_setup_id,
  company_type_id,
  median_monthly_gross,
  p25_monthly_gross,
  p75_monthly_gross,
  thirteenth_month_included,
  estimated_annual_bonus,
  estimated_monthly_allowances,
  confidence_score,
  sample_size,
  effective_date,
  source_batch_id
)
select
  roles.id,
  location_dim.id,
  experience_dim.id,
  industry_dim.id,
  work_setup_dim.id,
  company_type_dim.id,
  seeded.median_monthly_gross,
  seeded.p25_monthly_gross,
  seeded.p75_monthly_gross,
  true,
  seeded.estimated_annual_bonus,
  seeded.estimated_monthly_allowances,
  seeded.confidence_score,
  seeded.sample_size,
  date '2026-04-01',
  selected_source_batch.id
from (
  values
    ('software-engineer', 'metro-manila', 'mid', 'tech', 'hybrid', 'mnc', 93000.00, 73000.00, 142000.00, 0.00, 1235.00, 80, 1000),
    ('software-engineer', 'cebu', 'mid', 'tech', 'hybrid', 'startup', 45000.00, 35000.00, 60000.00, 0.00, 1000.00, 60, 100),
    ('senior-software-engineer', 'metro-manila', 'senior', 'tech', 'remote-ph', 'mnc', 120000.00, 100000.00, 150000.00, 0.00, 1500.00, 90, 200),
    ('customer-service-representative', 'metro-manila', 'mid', 'bpo', 'onsite', 'mnc', 29000.00, 24000.00, 37000.00, 0.00, 1235.00, 70, 2000),
    ('customer-service-representative', 'cebu', 'mid', 'bpo', 'onsite', 'mnc', 27000.00, 22000.00, 34000.00, 0.00, 1000.00, 70, 1000),
    ('data-analyst', 'metro-manila', 'mid', 'finance', 'hybrid', 'mnc', 40000.00, 32000.00, 52000.00, 0.00, 1235.00, 80, 300),
    ('accountant', 'metro-manila', 'mid', 'finance', 'hybrid', 'local-sme', 38000.00, 30000.00, 48000.00, 0.00, 1235.00, 70, 400),
    ('hr-specialist', 'metro-manila', 'mid', 'other', 'hybrid', 'mnc', 37000.00, 30000.00, 47000.00, 0.00, 1235.00, 90, 500)
) as seeded(
  role_slug,
  location_slug,
  experience_slug,
  industry_slug,
  work_setup_slug,
  company_type_slug,
  median_monthly_gross,
  p25_monthly_gross,
  p75_monthly_gross,
  estimated_annual_bonus,
  estimated_monthly_allowances,
  confidence_score,
  sample_size
)
join public.benchmark_roles roles on roles.slug = seeded.role_slug
join public.benchmark_dimensions location_dim on location_dim.dimension_type = 'location' and location_dim.slug = seeded.location_slug
join public.benchmark_dimensions experience_dim on experience_dim.dimension_type = 'experience' and experience_dim.slug = seeded.experience_slug
join public.benchmark_dimensions industry_dim on industry_dim.dimension_type = 'industry' and industry_dim.slug = seeded.industry_slug
join public.benchmark_dimensions work_setup_dim on work_setup_dim.dimension_type = 'work_setup' and work_setup_dim.slug = seeded.work_setup_slug
join public.benchmark_dimensions company_type_dim on company_type_dim.dimension_type = 'company_type' and company_type_dim.slug = seeded.company_type_slug
cross join selected_source_batch
on conflict (role_id, location_id, experience_id, industry_id, work_setup_id, company_type_id, effective_date) do update set
  median_monthly_gross = excluded.median_monthly_gross,
  p25_monthly_gross = excluded.p25_monthly_gross,
  p75_monthly_gross = excluded.p75_monthly_gross,
  thirteenth_month_included = excluded.thirteenth_month_included,
  estimated_annual_bonus = excluded.estimated_annual_bonus,
  estimated_monthly_allowances = excluded.estimated_monthly_allowances,
  confidence_score = excluded.confidence_score,
  sample_size = excluded.sample_size,
  source_batch_id = excluded.source_batch_id,
  updated_at = now();

with default_benchmark as (
  select benchmarks.id
  from public.salary_benchmarks benchmarks
  join public.benchmark_roles roles on roles.id = benchmarks.role_id
  join public.benchmark_dimensions experience_dim on experience_dim.id = benchmarks.experience_id
  join public.benchmark_dimensions location_dim on location_dim.id = benchmarks.location_id
  join public.benchmark_dimensions industry_dim on industry_dim.id = benchmarks.industry_id
  join public.benchmark_dimensions work_setup_dim on work_setup_dim.id = benchmarks.work_setup_id
  join public.benchmark_dimensions company_type_dim on company_type_dim.id = benchmarks.company_type_id
  where roles.slug = 'software-engineer'
    and experience_dim.slug = 'mid'
    and location_dim.slug = 'metro-manila'
    and industry_dim.slug = 'tech'
    and work_setup_dim.slug = 'hybrid'
    and company_type_dim.slug = 'mnc'
  limit 1
)
insert into public.benchmark_skill_adjustments (benchmark_id, skill_id, monthly_adjustment)
select
  default_benchmark.id,
  skills.id,
  adjustment.monthly_adjustment
from default_benchmark
join (
  values
    ('react', 1500.00),
    ('nodejs', 1500.00),
    ('sql', 1500.00),
    ('tableau', 1200.00),
    ('project-management', 1000.00)
) as adjustment(skill_slug, monthly_adjustment) on true
join public.benchmark_dimensions skills on skills.dimension_type = 'skill' and skills.slug = adjustment.skill_slug
on conflict (benchmark_id, skill_id) do update set
  monthly_adjustment = excluded.monthly_adjustment,
  updated_at = now();
