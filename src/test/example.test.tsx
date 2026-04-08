import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SalaryEstimatorPage } from "@/features/salary-estimator/components/salary-estimator-page";

describe("SalaryEstimatorPage", () => {
  it("reveals a salary estimate when the workbench is submitted", async () => {
    render(<SalaryEstimatorPage />);

    expect(screen.getByText(/know your market salary in the philippines/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /show my salary estimate/i }));

    expect(await screen.findByText(/your estimated salary range in the philippine market/i)).toBeInTheDocument();
    expect(await screen.findByText(/comparable salary signals in the philippine market/i)).toBeInTheDocument();
  });
});
