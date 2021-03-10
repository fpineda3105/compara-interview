import { ICarInsurance } from "../domain/insurance/ICarInsurance";
import { InsuranceExtractorSummary } from "./InsuranceExtractorSummary";
import * as fs from "fs";
import { WriteStream } from "fs";

export class TxtExtractorSummary implements InsuranceExtractorSummary {
  private carInsurance: ICarInsurance;
  private fileSummary: WriteStream;
  public static FILE_HEADER: string = "OMGHAI!";
  public static DAY_HEADER: string = `-------- day X --------`;
  public static NEW_LINE: string = "\n";

  constructor(carInsurance: ICarInsurance, fileName: string) {
    this.carInsurance = carInsurance;
    this.fileSummary = fs.createWriteStream(fileName);
  }

  async executeForDays(days: number): Promise<void> {
    this.writeFileHeader();
    this.writeSummaryOf(days);
    this.closeTxtFileSummary();

    return new Promise<void>((resolve) => setTimeout(resolve, 50));
  }

  private writeFileHeader(): void {
    this.fileSummary.write(TxtExtractorSummary.FILE_HEADER);
    this.writeNewLine();
  }

  private writeNewLine(): void {
    this.fileSummary.write(TxtExtractorSummary.NEW_LINE);
  }

  private runDailyUpdate(): void {
    this.carInsurance.dailyUpdate();
  }

  private writeSummaryOf(days: number): void {
    Array(days + 1)
      .fill(0, 0, days + 1)
      .map((_, index) => index)
      .forEach((day) => {
        this.writeDaySummary(day);
        this.writeNewLine();
        this.runDailyUpdate();
      });
  }

  private writeDaySummary(day: number): void {
    this.fileSummary.write(
      TxtExtractorSummary.DAY_HEADER.replace("X", day.toString())
    );
    this.writeNewLine();
    this.fileSummary.write(this.carInsurance.dailySummary());
  }

  private closeTxtFileSummary(): void {
    this.fileSummary.end();
  }
}
