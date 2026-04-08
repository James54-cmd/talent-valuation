import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SalaryEstimatorPage } from "@/features/salary-estimator/components/salary-estimator-page";

describe("SalaryEstimatorPage", () => {
  it("reveals a salary estimate when the workbench is submitted", () => {
    render(<SalaryEstimatorPage />);

    expect(screen.getByText(/salary estimator that looks like a product/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /calculate salary/i }));

    expect(screen.getByText(/a cleaner decision surface for the result/i)).toBeInTheDocument();
    expect(screen.getByText(/similar roles hiring right now/i)).toBeInTheDocument();
  });
});
