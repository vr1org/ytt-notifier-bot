import { Given, TableDefinition, Then, When } from "cucumber";
import { statisticsGivenSteps, statisticsWhenSteps, statisticsThenSteps } from "test/implementation/injector";
import { IWorld } from "test/world";

When("I open home page", async function (this: IWorld): Promise<void> {
  await statisticsWhenSteps(this).iOpenHomePage();
});

When("I get latest data", async function (this: IWorld): Promise<void> {
  await statisticsWhenSteps(this).iGetLatestData();
});

Given("I have remote statistics data", async function (this: IWorld, table: TableDefinition): Promise<void> {
  await statisticsGivenSteps(this).iHaveRemoteStatisticsData(<any[]>table.hashes());
});

Then("I see displayed statistics", async function (this: IWorld, table: TableDefinition): Promise<void> {
  await statisticsThenSteps(this).iSeeDisplayedStatistics(<any[]>table.hashes());
});
