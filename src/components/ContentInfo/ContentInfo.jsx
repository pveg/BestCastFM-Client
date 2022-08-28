import { Text } from "@nextui-org/react";

function ContentInfo() {
    return (
        <>
          <Text className="text-center"
            h1
            size={60}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Let's
          </Text>
          <Text className="text-center"
            h1
            size={60}
            css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
            }}
            weight="bold"
          >
            Listen to
          </Text>
          <Text className="text-center"
            h1
            size={60}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
          >
            Podcasts
          </Text>
        </>
      );
    }

export default ContentInfo