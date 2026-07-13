import { msg, type MsgOptions } from "@lit/localize";
import { LitElement, type TemplateResult } from "lit";

export class BaseClass extends LitElement {
  protected get msg(): (
    str: string | TemplateResult,
    options?: MsgOptions,
  ) => string | TemplateResult {
    return msg;
  }
}
