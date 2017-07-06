import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill, Fit,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "../../src";

import preloader from "../../src/utils/preloader";

import createTheme from "../../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../../src/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  webpackLogo: require("../assets/webpack-logo.png"),
  dependencyGraph: require("../assets/dependency-graph.png"),
  loadersExp1: require("../assets/loaders-1.png"),
  loadersExp2: require("../assets/loaders-2.png"),
  plugin: require("../assets/extractTextPlugin.png"),
  htmlScripts: require("../assets/html-scripts.png"),
  htmlBundle: require("../assets/html-bundle.png"),
  codeSplitting: require("../assets/dynamic.png"),
  alias: require("../assets/alias.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Helvetica",
  secondary: "Montserrat"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={500}>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1} textColor="white">
            What is Webpack?
          </Heading>
          <Text margin="10px 0 0" textColor="black" size={2} bold>
            By Stephanie Cure
          </Text>
        </Slide>
        <Slide id="wait-what" transition={["slide"]} bgColor="black" notes="confused">
            <Layout>
              <Fit>
                <Image src={images.kat.replace("/", "")} margin="0 100px" height="293px"/>
              </Fit>
              <Fill>
            <Appear fid="1">
              <Heading size={5} caps fit textColor="tertiary" textFont="primary">
                Bundle what?
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={4} caps fit textColor="primary" textFont="primary">
                But how?
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={3} caps fit textColor="tertiary" textFont="primary">
                But why?
              </Heading>
            </Appear>
            <Appear fid="4">
              <Heading size={3} caps fit textColor="primary" textFont="primary">
               Loaders? Plugins?
              </Heading>
            </Appear>
            </Fill>
            </Layout>
        </Slide>
        <Slide id="before-bundlers" transition={["slide"]} notes="modularity">
          <Heading size={3} caps textColor="tertiary" textFont="primary"> Before bundlers</Heading>
            <Image src={images.htmlScripts} width="1000px" margin="50px auto"/>
        </Slide>
        <Slide id="after-bundlers" transition={["slide"]}>
          <Heading size={3} caps textColor="tertiary" textFont="primary"> After bundlers</Heading>
            <Image src={images.htmlBundle} width="1000px" margin="50px auto"/>
        </Slide>
        <Slide id="what-is-webpack" transition={["slide"]} notes="<ul><li>Output the final bundle module that will be loaded by the browser</li><li>Can target Node or Desktop environments like Electron</li><li>output target is controlled by the target field, default is web</li><li>The main use case for using the Node target is Server Side Rendering</li></ul>">
          <Heading size={2} caps fit textColor="tertiary" textFont="primary"> What is Webpack?</Heading>
          <Layout>
            <Fill>
               <List>
                  <ListItem>Module bundler</ListItem>
                  <ListItem>A tool we use to build our project</ListItem>
                  <ListItem>Became popular with React apps due to Hot Module Replacement (HMR)</ListItem>
                  <ListItem>Despite it's name it's not limited to web alone</ListItem>
                </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide id="how-does-it-bundle" transition={["fade"]} bgColor="secondary" textColor="white" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={2} caps fit textColor="tertiary" textFont="primary">How does it bundle?</Heading>
            <List>
              <Appear><ListItem>Entry point for webpack to start bundling</ListItem></Appear>
              <Appear><ListItem>Read all imports and requires</ListItem></Appear>
              <Appear><ListItem>Depenency Graph</ListItem></Appear>
              <Appear><ListItem>Treat module accroding to the rules and transforms specified in the config file</ListItem></Appear>
            </List>
          </Slide>
        <Slide id="dependency-graph" transition={["zoom"]} bgColor="white" textColor="black" notes="<ul><li>Is a directed graph that describes how nodes relate to each other</li><li>Each node is a module and the edges are references (require, import) to other modules</li></ul>">
          <Heading size={2} caps fit textColor="tertiary" textFont="primary"> Dependency Graph</Heading>
            <Image src={images.dependencyGraph} width="1000px" margin="40px auto"/>
        </Slide>
        <Slide id="excecution-process-resolution" transition={["fade"]} bgColor="tertiary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={2} caps fit textColor="white" textFont="primary"> Excecution Process</Heading>
            <Heading size={4} textColor="black" textFont="primary" textAlign="left"> Resolution</Heading>
              <List>
                <ListItem>Resolve entry in the file system</ListItem>
                <ListItem>We can specify where to lookup</ListItem>
                <ListItem>We can specify the way it matches file ext</ListItem>
                <ListItem>We can specify aliases against directories</ListItem>
                <ListItem>Loaders get resolved too</ListItem>
              </List>
        </Slide>
        <Slide id="excecution-process-aliasing" transition={["fade"]} bgColor="tertiary" notes="It’s important to configure the root with an absolute path so the path in the alias section is becoming relative to where the webpack.config file resides">
            <Heading size={2} caps fit textColor="white" textFont="primary"> Excecution Process</Heading>
            <Heading size={4} textColor="black" textFont="primary" textAlign="left"> Aliasing directories</Heading>
              <CodePane
                lang="js"
                source={require("raw-loader!../assets/aliasing.example")}
                margin="50px auto"
              />
              <Image src={images.alias} width="400px" />
        </Slide>
        <Slide id="excecution-process-evaluation" transition={["fade"]} bgColor="tertiary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={2} caps fit textColor="white" textFont="primary"> Excecution Process</Heading>
            <Heading size={4} textColor="black" textFont="primary" textAlign="left"> Evaluation</Heading>
              <List>
                <ListItem>Assuming all loaders were found, webpack runs the module through each loader</ListItem>
                <ListItem>There can be more than 1 loader</ListItem>
                <ListItem>Loaders are evaluated from right to left and bottom to top</ListItem>
              </List>
        </Slide>
        <Slide id="smallest-config" transition={["zoom", "fade"]} bgColor="primary">
        <Heading size={3} caps textColor="tertiary" textFont="primary"> The smallest config</Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/deck.example")}
            margin="50px auto"
          />
        </Slide>
        <Slide id="example" transition={["fade"]} bgColor="primary">
            <Heading size={3} caps textColor="tertiary" textFont="primary" margin-top="20px"> Config Example</Heading>
            <CodePane
              lang="js"
              source={require("raw-loader!../assets/webpack.config.example")}
              margin="20px auto"
            />
        </Slide>
        <Slide id="example-2" transition={["fade"]} bgColor="primary">
            <CodePane
              lang="js"
              source={require("raw-loader!../assets/reading.example")}
            />
        </Slide>
        <Slide id="loaders" transition={["slide"]} bgColor="white">
            <Heading size={2} caps textColor="tertiary"> Loaders</Heading>
              <List>
                  <ListItem>Transformations to be applied to modules</ListItem>
                  <ListItem>Multiple ways to set up module loaders. (Use, loader, loaders)</ListItem>
                  <ListItem>We can specify paths for loaders as well</ListItem>
                  <ListItem>Include, exclude modules</ListItem>
                  <ListItem>Evaluated from bottom to top and right to left</ListItem>
                  <ListItem>We can enforce evaluation order</ListItem>
                </List>
        </Slide>
        <Slide id="loaders-1" transition={["zoom", "fade"]} bgColor="primary">
           <Heading size={4} textColor="tertiary"> Loaders excecution order </Heading>
          <Layout>
            <Fit>
              <Image src={images.loadersExp1} width="1000px"/>
            </Fit>
            </Layout>
            <Layout>
            <Fit>
              <Image src={images.loadersExp2} width="1000px"/>
            </Fit>
          </Layout>
        </Slide>
        <Slide id="loaders-2" transition={["zoom", "fade"]} bgColor="primary" notes="Test: Match against a RegExp, string, function, an object, or an array of conditions like these. Test combined with exclude and include is the most common way to match files">
          <Heading size={4} textColor="tertiary"> Include, Exclude </Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/loader-3.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide id="plugins" transition={["fade"]} bgColor="white" notes="<ul><li>They also serve the purpose of doing anything else that a loader cannot do</li></ul>">
            <Heading size={2} caps textColor="tertiary">Plugins</Heading>
              <List>
                  <ListItem>Allow us to intercept runtime events at different stages of the bundling process</ListItem>
                  <ListItem>A good example is bundle extraction performed by ExtractTextPlugin</ListItem>
                </List>
        </Slide>
        <Slide id="extract-text" transition={["slide"]} bgColor="secondary" notes="What it does is for every  require(style.css) web pack encounters in the dependency graph it grabs the css chunks and extracts them from the bundle into a separate CSS file.">
            <Heading size={2} textColor="tertiary">ExtractTextPlugin</Heading>
              <List textColor="white">
                  <ListItem>Works in parallel with a loader</ListItem>
                  <ListItem>Extracts CSS out of the bundle and into a separate file</ListItem>
              </List>
        </Slide>
        <Slide id="extract-text-1" transition={["slide"]} bgColor="white" notes="<ul><li>ExtractTextPlugin.extract is a loader that accepts use and fallback definitions</li><li>use is used for the initial chunks by default it uses fallback for the rest</li><li>It doesn't touch any split bundles unless allChunks: true is set true</li><li>If you wanted to extract CSS from a more involved format, like Sass, you would have to pass multiple loaders to the use option. Both use and fallback accept a loader (string), a loader definition, or an array of loader definitions.</li></ul>">
            <Heading size={4} textColor="tertiary">ExtractTextPlugin</Heading>
                <CodePane
                  lang="js"
                  source={require("raw-loader!../assets/extractText.example")}
                  margin="20px auto"
                />
        </Slide>
        <Slide id="code-splitting" transition={["slide"]} bgColor="white" notes="<ul><li>Large applications may take some time to load on client side. This may result in a behavior we don’t want our users to experience.</li><li>his problem becomes worse for mobile environments where bandwidth cab be limited.</li><li>What code splitting tries to solve is improving initial load time of the app by adding split points in the code that differs chunks of code to be loaded on demand.</li><li>Code can be loaded by actions from the user. Can be coded by devs as a prediction to user actions. Etc</li></ul>">
            <Heading size={2} textColor="tertiary">Code Splitting</Heading>
            <Image src={images.codeSplitting} height="400px" width="600px" margin="50px auto"/>
        </Slide>
        <Slide id="code-splitting-1" transition={["slide"]} bgColor="white" notes="<ul><li>Large applications may take some time to load on client side. This may result in a behavior we don’t want our users to experience.</li><li>his problem becomes worse for mobile environments where bandwidth cab be limited.</li><li>What code splitting tries to solve is improving initial load time of the app by adding split points in the code that differs chunks of code to be loaded on demand.</li><li>Code can be loaded by actions from the user. Can be coded by devs as a prediction to user actions. Etc</li></ul>">
            <Heading size={2} textColor="tertiary">Code Splitting</Heading>
              <List>
                  <ListItem>Allows to load code lazily</ListItem>
                  <ListItem>Dynamic imports</ListItem>
                  <ListItem>Promise based</ListItem>
                  <ListItem>Different than splitting bundles</ListItem>
                  <ListItem>The goal is to end up with a split point that gets loaded on demand</ListItem>
                  <ListItem>The advantage of doing this is to have a smaller initial payload and improve user experience</ListItem>
              </List>
        </Slide>
        <Slide id="conclusions" transition={["slide"]} bgColor="tertiary">
            <Heading size={2} caps textColor="white">Conclusions</Heading>
              <List>
                  <Appear><ListItem>Heavy on configuration</ListItem></Appear>
                  <Appear><ListItem>Powerful tool to build projects</ListItem></Appear>
                  <Appear><ListItem>Long learning curve</ListItem></Appear>
                  <Appear><ListItem>Confusing documentation on the web</ListItem></Appear>
              </List>
        </Slide>
      </Deck>
    );
  }
}
