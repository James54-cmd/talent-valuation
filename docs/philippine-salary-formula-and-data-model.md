# Philippine Salary Formula And Data Model

## Goal

Define a salary estimation method that feels credible for Philippine users today and can map cleanly to Supabase benchmark records later.

This document is the product-side methodology for step 4.

## Core Product Principle

The estimator should behave like a Philippine compensation guide, not a global calculator.

That means:

- monthly gross is the primary number
- annual output is secondary
- 13th month pay is always explicit
- ranges are preferred over exact promises
- local context matters: NCR, Cebu, Davao, other PH regions, remote PH, remote international

## Formula Structure

The estimator starts from a role benchmark, then applies Philippine-market adjustments.

```txt
monthly_median_gross =
  role_benchmark
  + experience_adjustment
  + location_adjustment
  + industry_adjustment
  + work_setup_adjustment
  + company_type_adjustment
  + skill_adjustment
```

## Current Adjustment Rules

### 1. Role benchmark

Each supported role begins with a benchmark monthly gross value.

Examples:

- Software Engineer: `₱50,000`
- Senior Software Engineer: `₱95,000`
- Customer Service Representative: `₱24,000`

This is the local midpoint before context-specific uplifts or downlifts.

### 2. Experience adjustment

Experience shifts the benchmark meaningfully because this is one of the strongest salary drivers in Philippine hiring.

Current values:

- Fresh Grad: `-₱12,000`
- Junior: `-₱5,000`
- Mid: `₱0`
- Senior: `+₱18,000`
- Lead: `+₱35,000`

### 3. Location adjustment

Metro Manila stays the strongest local benchmark, with Cebu and Davao usually pricing lower for similar roles.

Current values:

- NCR / Metro Manila: `+₱8,000`
- Cebu: `+₱2,500`
- Davao: `₱0`
- Other PH region: `-₱4,500`

### 4. Industry adjustment

Industries with stronger compensation pressure receive upward adjustments.

Current values:

- BPO: `-₱6,000`
- Tech: `+₱12,000`
- Finance: `+₱9,000`
- Government: `-₱2,000`
- Healthcare: `+₱3,000`
- E-commerce: `+₱6,000`
- Other: `₱0`

### 5. Work setup adjustment

Remote should not be treated as one bucket.

Current values:

- Onsite: `₱0`
- Hybrid: `+₱3,000`
- Remote (PH-based): `+₱7,000`
- Remote (International client): `+₱38,000`

This keeps remote international work clearly distinct from local remote work.

### 6. Company type adjustment

Employer profile changes salary expectations even for similar roles.

Current values:

- Local SME: `-₱4,000`
- Multinational (MNC): `+₱12,000`
- Startup: `+₱5,000`

### 7. Skill adjustment

Skills add specificity but should not dominate the model.

Current rule:

- first selected skill adds no uplift
- each additional skill adds `₱1,500`
- skills are capped at four counted skills

This prevents inflated estimates from unchecked tag-stuffing.

## Range Logic

The product should never output a single exact “predicted salary.”

Current range rule:

```txt
lower_bound = monthly_median_gross * 0.87
upper_bound = monthly_median_gross * 1.14
```

Rounded to the nearest hundred pesos.

This produces a practical, negotiation-friendly band instead of fake precision.

## Annual Output Logic

The estimator shows annual context only after monthly gross.

```txt
annual_base = monthly_median_gross * 12
thirteenth_month = monthly_median_gross
annual_with_13th = annual_base + thirteenth_month
annual_total_cash = annual_with_13th + annual_bonus + (monthly_allowances * 12)
```

## Bonus And Allowance Logic

### Annual bonus

- MNC: `1.2 x monthly median`
- Finance: `1.0 x monthly median`
- Everyone else: `0.45 x monthly median`

### Monthly allowances

- BPO: `₱2,500`
- Remote PH or Remote International: `₱3,500`
- Others: `₱2,000`

These are still heuristic values and should become benchmark-record fields later.

## Confidence Logic

Confidence is a trust signal, not a statistical claim of certainty.

Current rule:

```txt
confidence =
  78
  + source_coverage_bonus
  + skill_specificity_bonus
  + remote_international_bonus
```

With a hard cap of `95`.

This should later be replaced with a confidence score derived from:

- sample size
- source recency
- source mix quality
- benchmark completeness

## Data Model Introduced In Code

Step 4 adds two important structures to the app domain:

### `SalaryBenchmarkRecord`

Represents the benchmark anchor:

- role title
- selected dimensions
- benchmark monthly gross
- sample size
- updated date
- source labels

### `SalaryEstimationBreakdown`

Represents how the final result was computed:

- role base monthly gross
- skill adjustment
- experience adjustment
- location adjustment
- industry adjustment
- work setup adjustment
- company type adjustment
- monthly median gross
- lower bound
- upper bound

This gives the product a cleaner bridge into a database-backed estimator.

## Mapping To Supabase Later

This formula maps naturally to the step 2 implementation plan:

- `benchmark_roles` stores role benchmark anchors
- `benchmark_dimensions` stores experience, location, industry, work setup, company type, and skill
- `salary_benchmarks` stores median, p25, p75, sample size, effective date, and source batch
- `benchmark_skill_adjustments` stores skill-specific uplifts

When that happens, the hardcoded benchmark catalog can be replaced without changing the estimator UI contract.

## Current Limitations

The current model is still heuristic.

It does not yet:

- compute net pay
- model region-specific wage floors directly
- support company-specific salary distributions
- calculate confidence from actual source freshness
- distinguish guaranteed vs discretionary bonus types

## Product Recommendation

Keep this formula for the current product stage, but treat it as a transparent benchmark engine, not a predictive AI model.

That framing is more credible, easier to defend, and much more consistent with the Philippine-first positioning.
