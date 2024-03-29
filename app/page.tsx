import { Checkbox, Title } from '@mantine/core';

// eslint-disable-next-line react/function-component-definition
export default function Home() {
  return (
    <main>
      <Title order={1}>This is h1 title</Title>
      <Title order={2}>This is h2 title</Title>
      <Title order={3}>This is h3 title</Title>
      <Title order={4}>This is h4 title</Title>
      <Title order={5}>This is h5 title</Title>
      <Title order={6}>This is h6 title</Title>
      <Checkbox defaultChecked label='I agree to sell my privacy' />
    </main>
  );
}
