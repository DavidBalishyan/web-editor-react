import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bg="#1E1E1EFF" color="gray.500" px={6} py={8}>
      <CodeEditor />
    </Box>
  );
}

export default App;
