import Wrapper from "./lib/Wrapper.svelte"
import schema from "./schema.json"
import pkg from "./package.json"

if (window) {
    const plugin = { Component: Wrapper, schema, version: pkg.version }
    if (!window["##NEXONE_CUSTOM_COMPONENTS##"]) {
        window["##NEXONE_CUSTOM_COMPONENTS##"] = []
    }
    window["##NEXONE_CUSTOM_COMPONENTS##"].push(plugin)
    if (window.registerCustomComponent) {
        window.registerCustomComponent(plugin)
    }
}

export const Component = Wrapper
export const version = pkg.version
export { schema }
