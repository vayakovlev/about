import GitHubColors from "github-colors";

export function getLangColor(name) {
    return GitHubColors.get(name, null).color
}