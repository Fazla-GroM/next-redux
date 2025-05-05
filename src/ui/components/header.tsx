import { Box, HStack } from "@chakra-ui/react";

type HeaderProperties = Readonly<{
    slotLeft?: React.JSX.Element | undefined;
    slotMiddle?: React.JSX.Element | undefined;
    slotRight?: React.JSX.Element | undefined;
}>;

export function Header({ slotLeft, slotMiddle, slotRight }: HeaderProperties) {
    return (
        <Box
            as="header"
            flexShrink="0"
            height="16"
            paddingX="4"
            borderBottomWidth="1px"
            borderColor="border"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            position="sticky"
            top="0"
            left="0"
            zIndex="sticky"
            backgroundColor="bg/60"
            backdropFilter="blur(8px)"
        >
            {slotLeft && <HStack>{slotLeft}</HStack>}
            {slotMiddle && <HStack flexGrow="1">{slotMiddle}</HStack>}
            {slotRight && <HStack>{slotRight}</HStack>}
        </Box>
    );
}
