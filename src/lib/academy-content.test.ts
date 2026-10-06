import { describe, expect, test } from "bun:test";
import { officeGroups, program, projects } from "./academy-content";

describe("approved program rules", () => {
  test("serves ages 9–18", () => {
    expect([program.minAge, program.maxAge]).toEqual([9, 18]);
  });
  test("includes six curriculum levels", () => {
    expect(program.levelCount).toBe(6);
    expect(projects.map(p => p.level)).toEqual(["Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Level 6"]);
  });
  test("introduces AI only from level 5", () => {
    expect(program.aiStartLevel).toBe(5);
  });
  test("trial costs $1.99 for 30 days", () => {
    expect([program.trialPrice, program.trialDays]).toEqual([1.99, 30]);
  });
  test("membership renews at $29 per month", () => {
    expect(program.monthlyPrice).toBe(29);
  });
  test("junior ages 9–12 have the approved three EST sessions", () => {
    expect(officeGroups[0]).toEqual({ name: "Junior", minAge: 9, maxAge: 12, sessions: [
      { day: "Tuesday", time: "5:30–7:00 PM" },
      { day: "Wednesday", time: "5:30–7:00 PM" },
      { day: "Saturday", time: "12:00–12:45 PM" },
    ] });
  });
  test("senior ages 13–18 meet Monday, Thursday and Friday evenings", () => {
    expect(officeGroups[1]).toEqual({ name: "Senior", minAge: 13, maxAge: 18, sessions: [
      { day: "Monday", time: "5:30–7:00 PM" },
      { day: "Thursday", time: "5:30–7:00 PM" },
      { day: "Friday", time: "5:30–7:00 PM" },
    ] });
  });
});