import { GitHubCalendar } from "react-github-calendar";

export default function Contributions() {
  return (
    <section className="w-full max-w-max border border-gray-400">
      <div className="max-w-max">
        <div
          className="
            p-5
            overflow-x-auto
          "
        >
          <GitHubCalendar
            username="allanrodneyyy"
            hideColorLegend
            blockSize={10}
            blockMargin={2}
            year={2026}
            theme={{
              light: [
                "#f3f4f6", // empty
                "#a7f3d0",
                "#6ee7b7",
                "#34d399",
                "#059669",
              ],
              dark: [
                "#f3f4f6",
                "#a7f3d0",
                "#6ee7b7",
                "#34d399",
                "#059669",
              ],
            }}
          />
        </div>
      </div>
    </section>
  );
}