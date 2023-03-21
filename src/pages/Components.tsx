import React from 'react';
import MainLayout from 'layouts/MainLayout';
import * as Common from 'components/commons/Index';
import Colors from 'lib/Colors';

const Components: React.FC = () => {
  return (
    <MainLayout myKey="components">
      <Common.Typography type="h1" text="Components" margin="0 0 2rem 0" />
      <Common.Typography type="h2" text="Typography" margin="2rem 0" />
      <Common.Paper theme="light">
        <Common.Typography
          type="h1"
          text="heading1"
          color={Colors('Dark')}
          margin="1rem 0"
        />
        <Common.Typography
          type="h2"
          text="heading2"
          color={Colors('Dark')}
          margin="1rem 0"
        />
        <Common.Typography
          type="h3"
          text="heading3"
          color={Colors('Dark')}
          margin="1rem 0"
        />
        <Common.Typography
          type="p"
          text="paragraph"
          color={Colors('Dark')}
          margin="1rem 0"
        />
      </Common.Paper>

      <Common.Typography type="h2" text="Colors" margin="2rem 0" />
      <Common.Paper theme="light">
        <Common.Typography
          type="h3"
          text="Colors('Primary')"
          color={Colors('Primary')}
          margin="1rem 0"
        />
        <Common.Typography
          type="h3"
          text="Colors('PrimaryVariant')"
          color={Colors('PrimaryVariant')}
          margin="1rem 0"
        />
        <Common.Typography
          type="h3"
          text="Colors('Secondary')"
          color={Colors('Secondary')}
          margin="1rem 0"
        />
        <Common.Typography
          type="h3"
          text="Colors.Background"
          color={Colors('Background')}
          margin="1rem 0"
        />
        <Common.Typography
          type="h3"
          text="Colors('GradationFrom')"
          color={Colors('GradationFrom')}
          margin="1rem 0"
        />
        <Common.Typography
          type="h3"
          text="Colors('GradationTo')"
          color={Colors('GradationTo')}
          margin="1rem 0"
        />
        <Common.Typography
          type="h3"
          text="Colors('Accent')"
          color={Colors('Accent')}
          margin="1rem 0"
        />
        <Common.Typography
          type="h3"
          text="Colors('Danger')"
          color={Colors('Danger')}
          margin="1rem 0"
        />
        <Common.Typography
          type="h3"
          text="Colors('Gray')"
          color={Colors('Gray')}
          margin="1rem 0"
        />
      </Common.Paper>

      <Common.Typography type="h2" text="Button" margin="2rem 0" />
      <Common.Typography type="h3" text="Normal Button" margin="2rem 0" />
      <Common.HStack gap="1rem" align="center" margin="2rem">
        <Common.Button theme="info" onClick={() => console.log('clicked')}>
          info button
        </Common.Button>
        <Common.Button theme="success" onClick={() => console.log('clicked')}>
          success button
        </Common.Button>
        <Common.Button theme="warning" onClick={() => console.log('clicked')}>
          warn button
        </Common.Button>
        <Common.Button theme="danger" onClick={() => console.log('clicked')}>
          danger button
        </Common.Button>
        <Common.Button disabled onClick={() => console.log('clicked')}>
          disabled button
        </Common.Button>
      </Common.HStack>

      <Common.HStack gap="1rem" align="center" margin="2rem">
        <Common.Button
          theme="info"
          size="lg"
          onClick={() => console.log('clicked')}
        >
          large button
        </Common.Button>
        <Common.Button
          theme="success"
          size="sm"
          onClick={() => console.log('clicked')}
        >
          small button
        </Common.Button>
      </Common.HStack>

      <Common.Typography type="h3" text="Gradation Button" margin="2rem 0" />
      <Common.HStack gap="1rem" align="center" margin="2rem">
        <Common.ButtonGradate
          theme="info"
          onClick={() => console.log('clicked')}
        >
          info button
        </Common.ButtonGradate>
        <Common.ButtonGradate
          theme="success"
          onClick={() => console.log('clicked')}
        >
          success button
        </Common.ButtonGradate>
        <Common.ButtonGradate
          theme="warning"
          onClick={() => console.log('clicked')}
        >
          warning button
        </Common.ButtonGradate>
        <Common.ButtonGradate
          theme="danger"
          onClick={() => console.log('clicked')}
        >
          danger button
        </Common.ButtonGradate>
      </Common.HStack>

      <Common.Typography type="h3" text="Outlined Button" margin="2rem 0" />
      <Common.HStack gap="1rem" align="center" margin="2rem">
        <Common.ButtonOutline
          theme="info"
          onClick={() => console.log('clicked')}
        >
          info button
        </Common.ButtonOutline>
        <Common.ButtonOutline
          theme="success"
          onClick={() => console.log('clicked')}
        >
          success button
        </Common.ButtonOutline>
        <Common.ButtonOutline
          theme="warning"
          onClick={() => console.log('clicked')}
        >
          warning button
        </Common.ButtonOutline>
        <Common.ButtonOutline
          theme="danger"
          onClick={() => console.log('clicked')}
        >
          danger button
        </Common.ButtonOutline>
      </Common.HStack>

      <Common.Typography type="h3" text="Shining Button" margin="2rem 0" />
      <Common.HStack gap="1rem" align="center" margin="2rem">
        <Common.ButtonShine theme="info" onClick={() => console.log('clicked')}>
          info button
        </Common.ButtonShine>
        <Common.ButtonShine
          theme="success"
          onClick={() => console.log('clicked')}
        >
          success button
        </Common.ButtonShine>
        <Common.ButtonShine
          theme="warning"
          onClick={() => console.log('clicked')}
        >
          warning button
        </Common.ButtonShine>
        <Common.ButtonShine
          theme="danger"
          onClick={() => console.log('clicked')}
        >
          danger button
        </Common.ButtonShine>
      </Common.HStack>

      <Common.Typography type="h3" text="Clear Button" margin="2rem 0" />
      <Common.HStack gap="1rem" align="center" margin="2rem">
        <Common.ButtonClear onClick={() => console.log('clicked')}>
          clear button
        </Common.ButtonClear>
      </Common.HStack>

      <Common.Typography type="h2" text="Badge" margin="2rem 0" />
      <Common.HStack gap="1rem" align="center" margin="2rem">
        <Common.Badge theme="info">info badge</Common.Badge>
        <Common.Badge theme="success">success Badge</Common.Badge>
        <Common.Badge theme="warning">warn Badge</Common.Badge>
        <Common.Badge theme="danger">danger Badge</Common.Badge>
      </Common.HStack>
      <Common.HStack gap="1rem" align="center" margin="2rem">
        <Common.Badge theme="info" size="lg">
          large Badge
        </Common.Badge>
        <Common.Badge theme="info" size="sm">
          small Badge
        </Common.Badge>
      </Common.HStack>

      <Common.Typography type="h2" text="Card" margin="2rem 0" />
      <Common.HStack gap="1rem" align="center" margin="2rem">
        <Common.Card
          background="/img/gallery/cat_with_hat.png"
          width="50%"
          height="300px"
        />
        <Common.Card
          background="/img/gallery/cat_with_hat.png"
          width="50%"
          height="300px"
        >
          <Common.Typography
            type="h2"
            text="your text here"
            margin="6rem 2rem"
            color={Colors('White')}
            align="center"
          />
        </Common.Card>
      </Common.HStack>
    </MainLayout>
  );
};

export default Components;
