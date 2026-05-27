import { Box, Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { ProjectInterface } from "./project";
import OptImg from "./optImg";

const tagColorMap: Record<string, string> = {
  default: "#64748b",
  gray: "#64748b",
  brown: "#92400e",
  orange: "#f97316",
  yellow: "#facc15",
  green: "#16a34a",
  blue: "#2563eb",
  purple: "#7c3aed",
  pink: "#f9a8d4",
  red: "#dc2626",
};

const darkTextTagColors = new Set(["orange", "yellow", "pink"]);

const getPlainText = (items?: ProjectInterface.RichText[]) =>
  items?.[0]?.plain_text?.trim() ?? "";

const CardItem = ({ data }: { data: ProjectInterface.Project }) => {
  if (!data) return null;

  const properties = data.properties;
  const title = getPlainText(properties?.Project?.title) || "Untitled Project";
  const tags = properties?.Tags?.multi_select ?? [];
  const work = getPlainText(properties?.Work?.rich_text);
  const date = getPlainText(properties?.Date?.rich_text);
  const imgSrc = getPlainText(properties?.Image?.rich_text);
  const workText = work
    .split("-")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <Box className="project-card">
      <Card className="h-full bg-transparent shadow-none">
        <CardBody className="flex h-full flex-col p-0">
          <Box className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl bg-slate-700">
            {imgSrc ? (
              <OptImg
                src={imgSrc}
                alt={`${title} project image`}
                width={600}
                height={450}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ height: "100%", objectFit: "cover", width: "100%" }}
              />
            ) : (
              <Box className="flex h-full w-full items-center justify-center px-4 text-center text-sm text-slate-300">
                이미지 준비중
              </Box>
            )}
          </Box>

          <Box className="flex flex-1 flex-col p-4">
            <Box className="space-y-2">
              <Heading className="text-base font-semibold leading-snug sm:text-lg">
                {title}
              </Heading>
              {date && (
                <Text className="text-sm font-semibold text-slate-100">
                  {date}
                </Text>
              )}
            </Box>

            {workText.length > 0 && (
              <Box className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                {workText.map((item, index) => (
                  <Text key={`${data.id}-work-${index}`}>{item}</Text>
                ))}
              </Box>
            )}

            {tags.length > 0 && (
              <Box className="mt-auto flex flex-wrap justify-center gap-1.5 pt-5">
                {tags.map((tag) => {
                  const bgColor = tagColorMap[tag.color] ?? tag.color;
                  const textColorClass = darkTextTagColors.has(tag.color)
                    ? "text-black"
                    : "text-white";

                  return (
                    <Text
                      key={tag.id}
                      className={`rounded px-2 py-1 text-xs font-semibold leading-none ${textColorClass}`}
                      style={{ backgroundColor: bgColor }}
                    >
                      {tag.name}
                    </Text>
                  );
                })}
              </Box>
            )}
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};

export default CardItem;
