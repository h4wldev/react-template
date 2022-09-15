import deepmerge from "deepmerge";
import nestedProperty from "nested-property";

import development from "../config/default";
import production from "../config/production";
import preview from "../config/preview";

class Config {
  constructor(
    private readonly env: string = 'dev',
    private readonly config: Record<string, any> = {},
  ) {
    this.config = deepmerge(
      deepmerge(config, development),
      { development, preview, production }[this.env] as Record<string, any>,
    );
  }

  get<T>(
    property: string | string[],
    defaultValue: T | null = null,
  ): T {
    if (Array.isArray(property)) {
      property = property.join('.');
    }

    return (nestedProperty.get(this.config, property) || defaultValue) as T;
  }

  has(property: string | string[]): boolean {
    if (Array.isArray(property)) {
      property = property.join('.');
    }

    return nestedProperty.has(this.config, property);
  }
}

// @ts-ignore
const config: Config = new Config(process.env.NODE_ENV);

export default config;
