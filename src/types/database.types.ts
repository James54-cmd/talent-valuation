export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      benchmark_dimensions: {
        Row: {
          created_at: string;
          dimension_type: string;
          id: string;
          is_active: boolean;
          label: string;
          slug: string;
          sort_order: number;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          dimension_type: string;
          id?: string;
          is_active?: boolean;
          label: string;
          slug: string;
          sort_order?: number;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          dimension_type?: string;
          id?: string;
          is_active?: boolean;
          label?: string;
          slug?: string;
          sort_order?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      benchmark_roles: {
        Row: {
          category: string | null;
          created_at: string;
          id: string;
          slug: string;
          title: string;
          updated_at: string;
        };
        Insert: {
          category?: string | null;
          created_at?: string;
          id?: string;
          slug: string;
          title: string;
          updated_at?: string;
        };
        Update: {
          category?: string | null;
          created_at?: string;
          id?: string;
          slug?: string;
          title?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      benchmark_skill_adjustments: {
        Row: {
          benchmark_id: string;
          created_at: string;
          id: string;
          monthly_adjustment: number;
          skill_id: string;
          updated_at: string;
        };
        Insert: {
          benchmark_id: string;
          created_at?: string;
          id?: string;
          monthly_adjustment: number;
          skill_id: string;
          updated_at?: string;
        };
        Update: {
          benchmark_id?: string;
          created_at?: string;
          id?: string;
          monthly_adjustment?: number;
          skill_id?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "benchmark_skill_adjustments_benchmark_id_fkey";
            columns: ["benchmark_id"];
            isOneToOne: false;
            referencedRelation: "salary_benchmarks";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "benchmark_skill_adjustments_skill_id_fkey";
            columns: ["skill_id"];
            isOneToOne: false;
            referencedRelation: "benchmark_dimensions";
            referencedColumns: ["id"];
          },
        ];
      };
      estimate_requests: {
        Row: {
          company_type_slug: string;
          created_at: string;
          experience_slug: string;
          id: string;
          industry_slug: string;
          location_slug: string;
          result_confidence: number;
          result_median_monthly_gross: number;
          role_slug: string;
          session_id: string | null;
          skills: string[];
          work_setup_slug: string;
        };
        Insert: {
          company_type_slug: string;
          created_at?: string;
          experience_slug: string;
          id?: string;
          industry_slug: string;
          location_slug: string;
          result_confidence: number;
          result_median_monthly_gross: number;
          role_slug: string;
          session_id?: string | null;
          skills?: string[];
          work_setup_slug: string;
        };
        Update: {
          company_type_slug?: string;
          created_at?: string;
          experience_slug?: string;
          id?: string;
          industry_slug?: string;
          location_slug?: string;
          result_confidence?: number;
          result_median_monthly_gross?: number;
          role_slug?: string;
          session_id?: string | null;
          skills?: string[];
          work_setup_slug?: string;
        };
        Relationships: [];
      };
      methodology_snapshots: {
        Row: {
          content: Json;
          id: string;
          is_current: boolean;
          published_at: string;
          summary: string;
          title: string;
          version: string;
        };
        Insert: {
          content: Json;
          id?: string;
          is_current?: boolean;
          published_at?: string;
          summary: string;
          title: string;
          version: string;
        };
        Update: {
          content?: Json;
          id?: string;
          is_current?: boolean;
          published_at?: string;
          summary?: string;
          title?: string;
          version?: string;
        };
        Relationships: [];
      };
      salary_benchmarks: {
        Row: {
          company_type_id: string;
          confidence_score: number;
          created_at: string;
          effective_date: string;
          estimated_annual_bonus: number;
          estimated_monthly_allowances: number;
          experience_id: string;
          id: string;
          industry_id: string;
          location_id: string;
          median_monthly_gross: number;
          p25_monthly_gross: number;
          p75_monthly_gross: number;
          role_id: string;
          sample_size: number;
          source_batch_id: string | null;
          thirteenth_month_included: boolean;
          updated_at: string;
          work_setup_id: string;
        };
        Insert: {
          company_type_id: string;
          confidence_score?: number;
          created_at?: string;
          effective_date: string;
          estimated_annual_bonus?: number;
          estimated_monthly_allowances?: number;
          experience_id: string;
          id?: string;
          industry_id: string;
          location_id: string;
          median_monthly_gross: number;
          p25_monthly_gross: number;
          p75_monthly_gross: number;
          role_id: string;
          sample_size?: number;
          source_batch_id?: string | null;
          thirteenth_month_included?: boolean;
          updated_at?: string;
          work_setup_id: string;
        };
        Update: {
          company_type_id?: string;
          confidence_score?: number;
          created_at?: string;
          effective_date?: string;
          estimated_annual_bonus?: number;
          estimated_monthly_allowances?: number;
          experience_id?: string;
          id?: string;
          industry_id?: string;
          location_id?: string;
          median_monthly_gross?: number;
          p25_monthly_gross?: number;
          p75_monthly_gross?: number;
          role_id?: string;
          sample_size?: number;
          source_batch_id?: string | null;
          thirteenth_month_included?: boolean;
          updated_at?: string;
          work_setup_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "salary_benchmarks_company_type_id_fkey";
            columns: ["company_type_id"];
            isOneToOne: false;
            referencedRelation: "benchmark_dimensions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "salary_benchmarks_experience_id_fkey";
            columns: ["experience_id"];
            isOneToOne: false;
            referencedRelation: "benchmark_dimensions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "salary_benchmarks_industry_id_fkey";
            columns: ["industry_id"];
            isOneToOne: false;
            referencedRelation: "benchmark_dimensions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "salary_benchmarks_location_id_fkey";
            columns: ["location_id"];
            isOneToOne: false;
            referencedRelation: "benchmark_dimensions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "salary_benchmarks_role_id_fkey";
            columns: ["role_id"];
            isOneToOne: false;
            referencedRelation: "benchmark_roles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "salary_benchmarks_source_batch_id_fkey";
            columns: ["source_batch_id"];
            isOneToOne: false;
            referencedRelation: "source_batches";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "salary_benchmarks_work_setup_id_fkey";
            columns: ["work_setup_id"];
            isOneToOne: false;
            referencedRelation: "benchmark_dimensions";
            referencedColumns: ["id"];
          },
        ];
      };
      source_batches: {
        Row: {
          id: string;
          imported_at: string;
          is_active: boolean;
          name: string;
          notes: string | null;
          published_on: string | null;
          source_type: string;
        };
        Insert: {
          id?: string;
          imported_at?: string;
          is_active?: boolean;
          name: string;
          notes?: string | null;
          published_on?: string | null;
          source_type: string;
        };
        Update: {
          id?: string;
          imported_at?: string;
          is_active?: boolean;
          name?: string;
          notes?: string | null;
          published_on?: string | null;
          source_type?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
