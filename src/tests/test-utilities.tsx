import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import type { PropsWithChildren } from "react";
import type React from "react";

import { ReduxStoreProvider } from "../redux/redux-store-provider";
import { ThemeProvider } from "../ui/theme/theme-provider";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
type ExtendedRenderOptions = Omit<RenderOptions, "queries">;

function customRender(ui: React.ReactElement, extendedRenderOptions: ExtendedRenderOptions = {}) {
    const { ...renderOptions } = extendedRenderOptions;

    const Wrapper = ({ children }: PropsWithChildren) => (
        <ReduxStoreProvider>
            <ThemeProvider>{children}</ThemeProvider>
        </ReduxStoreProvider>
    );

    // Return an enriched object with custom stuff and all of RTL's query functions
    return {
        ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    };
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
