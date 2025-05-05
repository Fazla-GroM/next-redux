import { Box, Heading, HStack, Icon } from "@chakra-ui/react";
import { MilestoneIcon } from "lucide-react";
import Link from "next/link";

export function Logo() {
    return (
        <HStack asChild gap="3" flexShrink="0" userSelect="none">
            <Link href="/">
                <Box
                    backgroundColor="purple.solid"
                    width="10"
                    height="10"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                >
                    <Icon size="lg" color="purple.contrast">
                        <MilestoneIcon />
                    </Icon>
                </Box>
                <Heading as="span" size="2xl">
                    Postly
                </Heading>
            </Link>
        </HStack>
    );
}
