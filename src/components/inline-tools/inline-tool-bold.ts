import { InlineTool, SanitizerConfig } from "../../../types";
import { IconBold } from "@codexteam/icons";
import API from "../modules/api";

/**
 * Bold Tool
 *
 * Inline Toolbar Tool
 *
 * Makes selected text bolder
 */
export default class BoldInlineTool implements InlineTool {
  /**
   * Specifies Tool as Inline Toolbar Tool
   *
   * @returns {boolean}
   */
  public static isInline = true;

  /**
   * Title for hover-tooltip
   */
  public static title = "Bold";

  /**
   * Sanitizer Rule
   * Leave <b> tags
   *
   * @returns {object}
   */
  public static get sanitize(): SanitizerConfig {
    return {
      b: {},
    } as SanitizerConfig;
  }

  /**
   * Custom by c98
   */
  private api: any;
  private isActive: boolean;

  /**
   * Native Document's command that uses for Bold
   */
  private readonly commandName: string = "bold";

  /**
   * Styles
   */
  private readonly CSS = {
    button: "ce-inline-tool",
    buttonActive: "ce-inline-tool--active",
    buttonModifier: "ce-inline-tool--bold",
  };

  /**
   * Elements
   */
  private nodes: { button: HTMLButtonElement } = {
    button: undefined,
  };

  /**
   * Create button for Inline Toolbar
   */

  constructor({ api }: { api: API }) {
    this.api = api;
    this.isActive = false;
  }

  public render(): HTMLElement {
    this.nodes.button = document.createElement("button") as HTMLButtonElement;
    this.nodes.button.type = "button";
    this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier);
    this.nodes.button.innerHTML = IconBold;

    return this.nodes.button;
  }

  /**
   * Wrap range with <b> tag
   */
  public surround(): void {
    if (this.isActive) {
      this.unwrap();
    } else {
      this.wrap();
    }

    this.api.blocks.getEditor().InlineToolbar.close();
  }

  public wrap(): void {
    console.log("wrap");

    const blocks = this.api.blocks.getBlockSelected();
    // eslint-disable-next-line padding-line-between-statements
    if (blocks.length > 1) {
      blocks.forEach(async (block) => {
        const data = await block.data;

        if (block.name === "paragraph") {
          const newData = {
            ...data,
            text: `<b>${data.text
              ?.replace(/<b>/g, "")
              ?.replace(/<\/b>/g, "")}</b>`,
          };

          await this.api.blocks.update(block.id, newData);
        } else {
          await this.api.blocks.update(block.id, data);
        }
      });
    } else {
      document.execCommand(this.commandName);
    }
  }

  public unwrap(): void {
    console.log("unwrap");
    const blocks = this.api.blocks.getBlockSelected();

    if (blocks.length > 1) {
      blocks.forEach(async (block) => {
        const data = await block.data;

        if (block.name === "paragraph") {
          const newData = {
            ...data,
            text: data.text?.replace(/<b>/g, "")?.replace(/<\/b>/g, ""),
          };

          await this.api.blocks.update(block.id, newData);
        } else {
          await this.api.blocks.update(block.id, data);
        }
      });
    } else {
      document.execCommand(this.commandName);
    }
  }

  /**
   * Check selection and set activated state to button if there are <b> tag
   *
   * @returns {boolean}
   */
  public checkState(): boolean {
    const isActive = document.queryCommandState(this.commandName);

    this.nodes.button.classList.toggle(this.CSS.buttonActive, isActive);

    this.isActive = isActive;

    return isActive;
  }

  /**
   * Set a shortcut
   *
   * @returns {boolean}
   */
  public get shortcut(): string {
    return "CMD+B";
  }
}
