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
    'Seeded benchmark data aligned with the initial SalarioPH deterministic formula and public methodology.',
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
    ('software-engineer', 73000.00, 64000.00, 83200.00, 87600.00, 3500.00, 90, 1640),
    ('senior-software-engineer', 128000.00, 111400.00, 145900.00, 153600.00, 3500.00, 91, 920),
    ('customer-service-representative', 33000.00, 28700.00, 37600.00, 14850.00, 2500.00, 84, 1380),
    ('data-analyst', 67000.00, 58300.00, 76400.00, 30150.00, 3500.00, 88, 1045),
    ('product-manager', 115000.00, 100100.00, 131100.00, 138000.00, 3500.00, 89, 610),
    ('accountant', 67000.00, 58300.00, 76400.00, 80400.00, 2000.00, 86, 860),
    ('hr-specialist', 57000.00, 49600.00, 65000.00, 68400.00, 2000.00, 85, 690),
    ('virtual-assistant', 62000.00, 53900.00, 70700.00, 27900.00, 3500.00, 87, 1110),
    ('registered-nurse', 53000.00, 46100.00, 60400.00, 23850.00, 2000.00, 84, 980),
    ('graphic-designer', 54000.00, 47000.00, 61600.00, 24300.00, 3500.00, 85, 750)
) as seeded(role_slug, median_monthly_gross, p25_monthly_gross, p75_monthly_gross, estimated_annual_bonus, estimated_monthly_allowances, confidence_score, sample_size)
join public.benchmark_roles roles on roles.slug = seeded.role_slug
join public.benchmark_dimensions location_dim on location_dim.dimension_type = 'location' and location_dim.slug = 'metro-manila'
join public.benchmark_dimensions experience_dim on experience_dim.dimension_type = 'experience' and experience_dim.slug = 'mid'
join public.benchmark_dimensions industry_dim on industry_dim.dimension_type = 'industry' and industry_dim.slug = case when seeded.role_slug in ('customer-service-representative') then 'bpo' when seeded.role_slug in ('accountant') then 'finance' when seeded.role_slug in ('registered-nurse') then 'healthcare' else 'tech' end
join public.benchmark_dimensions work_setup_dim on work_setup_dim.dimension_type = 'work_setup' and work_setup_dim.slug = 'hybrid'
join public.benchmark_dimensions company_type_dim on company_type_dim.dimension_type = 'company_type' and company_type_dim.slug = 'mnc'
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
