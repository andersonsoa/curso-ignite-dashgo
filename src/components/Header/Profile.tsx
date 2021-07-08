import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Anderson Soares</Text>
          <Text color="gray.300" fontSize="small">
            anderson.ceu@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Anderson Soares"
        src="https://github.com/andersonsoa.png"
      />
    </Flex>
  );
}
