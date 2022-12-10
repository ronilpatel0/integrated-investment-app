import { Card, Page, Layout, TextContainer, Heading } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function PageName() {
  return (
    <Page>
      <TitleBar
        title="Home"
        primaryAction={{
          content: "Save",
          onAction: () => console.log("Save"),
        }}
        secondaryActions={[
          {
            content: "Settings",
            onAction: () => console.log("Settings"),
          },
        ]}
      />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Heading>Heading</Heading>
            <TextContainer>
              <p>Body</p>
            </TextContainer>
          </Card>
          <Card sectioned>
            <Heading>Heading</Heading>
            <TextContainer>
              <p>Body</p>
            </TextContainer>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <Card sectioned>
            <Heading>Heading 2</Heading>
            <TextContainer>
              <p>Body</p>
            </TextContainer>
          </Card>
          <Card sectioned>
            <Heading>Heading 2</Heading>
            <TextContainer>
              <p>Body</p>
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
