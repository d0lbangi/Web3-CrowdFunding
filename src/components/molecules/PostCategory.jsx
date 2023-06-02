import React from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  Button,
  InputLeftElement,
  Radio,
  RadioGroup,
  useRadio,
  useRadioGroup,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Heading,
  Text,
  IconButton,
  Image,
} from "@chakra-ui/react";

export default function PostCategory() {
  const options = ["All", "My tree NFT", "Eco-info", "Eco-lifestyle"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();
  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="xl"
        boxShadow="md"
        _checked={{
          bg: "green.200",
          color: "white",
          borderColor: "green.300",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={2}
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  );
}
