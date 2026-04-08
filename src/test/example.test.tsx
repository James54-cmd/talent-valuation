import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SalaryEstimatorPage } from "@/features/salary-estimator/components/salary-estimator-page";

describe("SalaryEstimatorPage", () => {
  it("reveals a salary estimate when the workbench is submitted", () => {
    render(<SalaryEstimatorPage />);

    expect(screen.getByText(/see your market salary in the philippines/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /calculate my salary/i }));

    expect(screen.getByText(/your estimated market range in the philippines/i)).toBeInTheDocument();
    expect(screen.getByText(/comparable roles in the philippine market/i)).toBeInTheDocument();
  });
});
