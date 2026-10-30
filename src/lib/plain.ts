export async function plainText(s: { compiledContent(): Promise<string> }) {
  return (await s.compiledContent()).replaceAll(/<\/?p>/g, "");
}
