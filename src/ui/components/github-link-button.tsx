import { IconButton } from "@chakra-ui/react";

import { GithubIcon } from "../icons/github-icon";

export function GithubLinkButton() {
    return (
        <IconButton asChild variant="ghost" aria-label="Github link" size="md" rounded="full">
            <a href="https://github.com/Fazla-GroM/next-redux" target="_blank" rel="noreferrer">
                <GithubIcon fill="current" />
            </a>
        </IconButton>
    );
}
