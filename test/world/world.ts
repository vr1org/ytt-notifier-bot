import { Context } from "../../src/botLogic/types";
import { TestContext } from "./testContext.type";

export class World {
  public context: Context = new TestContext();
}
