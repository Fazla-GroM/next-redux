import { Box, Container } from "@chakra-ui/react";

import { ColorModeButton } from "../theme/color-mode";
import { Logo } from "./logo";

export function GlobalHeader() {
    return (
        <Box
            as="header"
            height="16"
            // borderBottomWidth="1px"
            // borderRightWidth="1px"
            // borderLeftWidth="1px"
            // borderColor="border"
        >
            <Container
                fluid
                maxWidth="5xl"
                height="full"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                borderBottomWidth="1px"
                borderRightWidth="1px"
                borderLeftWidth="1px"
                borderColor="border"
            >
                <Logo />
                <ColorModeButton />
            </Container>
        </Box>
    );
}
