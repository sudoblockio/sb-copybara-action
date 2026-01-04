import { CopyBara } from "./copybara.js";

describe("CopyBara", () => {
  describe("useSsh", () => {
    it("returns false when sshKey is empty string", () => {
      expect(CopyBara.useSsh("")).toBe(false);
    });

    it("returns false when sshKey is undefined", () => {
      expect(CopyBara.useSsh(undefined)).toBe(false);
    });

    it("returns false when sshKey is whitespace only", () => {
      expect(CopyBara.useSsh("   ")).toBe(false);
    });

    it("returns true when sshKey is provided", () => {
      expect(CopyBara.useSsh("-----BEGIN OPENSSH PRIVATE KEY-----")).toBe(true);
    });
  });

  describe("repoUrl", () => {
    it("returns HTTPS URL when useSsh is false", () => {
      expect(CopyBara.repoUrl("owner/repo", false)).toBe("https://github.com/owner/repo.git");
    });

    it("returns SSH URL when useSsh is true", () => {
      expect(CopyBara.repoUrl("owner/repo", true)).toBe("git@github.com:owner/repo.git");
    });
  });
});
