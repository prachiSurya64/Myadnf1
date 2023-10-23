import PropTypes from "prop-types";

import {
  ShoppingCartOutlined,
  StopOutlined,
  TeamOutlined,
  BgColorsOutlined,
  HomeFilled,
} from "@ant-design/icons";
import { Card, Space, Statistic } from "antd";
import Typography from "antd/es/typography/Typography";

function Dashboard() {
  return (
    <>
      <Typography.Title level={4}>
        <HomeFilled />
        &nbsp; Dashboard
      </Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          title={"Active Properties"}
          value={12640}
          icon={
            <ShoppingCartOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(135,206,250,0.9)",
                borderRadius: 19,
                padding: 8,
              }}
            />
          }
        />
        <DashboardCard
          title={"Pending Properties"}
          value={640}
          icon={
            <BgColorsOutlined
              style={{
                color: "Teal",
                backgroundColor: "rgba(175,200,238)",
                borderRadius: 19,
                padding: 8,
              }}
            />
          }
        />
        <DashboardCard
          title={"Expire Properties"}
          value={10}
          icon={
            <StopOutlined
              style={{
                color: "Teal",
                backgroundColor: "rgba(175,200,238)",
                borderRadius: 19,
                padding: 8,
              }}
            />
          }
        />
        <DashboardCard
          title={"Customers "}
          value={6240}
          icon={
            <TeamOutlined
              style={{
                color: "Indigo",
                backgroundColor: "rgba(175,200,238)",
                borderRadius: 19,
                padding: 8,
              }}
            />
          }
        />
      </Space>
    </>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <>
      <Card
        style={{
          width: "300px",
          color: "blue",
          backgroundColor: "	#5f9ea0",
          alignItems: "end",
          cursor: "pointer",
          transition: "transform 0.8s ease-in-out",
          ":hover": {
            transform: "scale(1.05)",
            backgroundColor: "skyblue",
          },
        }}
      >
        <Space direction="horizontal">
          <div style={{ height: "20", fontSize: 24, padding: 8 }}>{icon}</div>
          <Statistic
            title={title}
            value={value}
            style={{
              display: "flex-1",
              // justifyContent: "space-end",
              justifyContent: "end",
              alignItems: "center",
            }}
          />
        </Space>
      </Card>
    </>
  );
}
DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.node.isRequired,
};

export default Dashboard;

{
  /* <div>Dashboard</div>; React is a JavaScript-based UI development library.
      Facebook and an open-source developer community run it. Although React is
      a library rather than a language, it is widely used in web development.
      The library first appeared in May 2013 and is now one of the most commonly
      used frontend libraries for web development. React offers various
      extensions for entire application architectural support, such as Flux and
      React Native, beyond mere UI. ReactJS History When compared to other
      technologies on the market, React is a new technology. Jordan Walk, a
      software engineer at Facebook, founded the library in 2011, giving it
      life. The likes of XHP, a straightforward HTML component framework for
      PHP, have an influence on React. Reacts news feed was its debut application
      in 2011. Later, Instagram picks it up and incorporates it into their
      platform. Why React?
      <b>
        {" "}
        React’s popularity today has eclipsed that of all other front-end
        development frameworks. React’s popularity today has eclipsed that of
        all other front-end development frameworks. React’s popularity today has
        eclipsed that of all other front-end development frameworks. React’s
        popularity today has eclipsed that of all other front-end development
        frameworks. React’s popularity today has eclipsed that of all other
        front-end development frameworks. React’s popularity today has eclipsed
        that of all other front-end development frameworks.
      </b>
      Here is why:- = Easy creation of dynamic applications: React makes it
      easier to create dynamic web applications because it requires less coding
      and offers more functionality, as opposed to JavaScript, where coding
      often gets complex very quickly. Improved performance: React uses Virtual
      DOM, thereby creating web applications faster. Virtual DOM compares the
      components’ previous states and updates only the items in the Real DOM
      that were changed, instead of updating all of the components again, as
      conventional web applications do. Reusable components: Components are the
      building blocks of any React application, and a single app usually
      consists of multiple components. These components have their logic and
      controls, and they can be reused throughout the application, which in turn
      dramatically reduces the application’s development time. Unidirectional
      data flow: React follows a unidirectional data flow. This means that when
      designing a React app, developers often nest child components within
      parent components. Since the data flows in a single direction, it becomes
      easier to debug errors and know where a problem occurs in an application
      at the moment in question. Small learning curve: React is easy to learn,
      as it mostly combines basic HTML and JavaScript concepts with some
      beneficial additions. Still, as is the case with other tools and
      frameworks, you have to spend some time to get a proper understanding of
      React’s library. It can be used for the development of both web and mobile
      apps: We already know that React is used for the development of web
      applications, but that’s not all it can do. There is a framework called
      React Native, derived from React itself, that is hugely popular and is
      used for creating beautiful mobile applications. So, in reality, React can
      be used for making both web and mobile applications. Dedicated tools for
      easy debugging: Facebook has released a Chrome extension that can be used
      to debug React applications. This makes the process of debugging React web
      applications faster and easier. The above reasons more than justify the
      popularity of the React library and why it is being adopted by a large
      number of organizations and businesses. Now let’s familiarize ourselves
      with React’s features. Become a Skilled Web Developer in Just 9 Months!
      Caltech PGP Full Stack DevelopmentEXPLORE PROGRAMBecome a Skilled Web
      Developer in Just 9 Months! ReactJS Keys After answering what is ReactJs,
      let us know what are keys. While dealing with components that are produced
      periodically in React, keys are essential. Your component will continue to
      be uniquely identifiable after the modification if the key value is set.
      They aid React in determining which elements have changed, been
      eliminated, or been added. When making lists of components in React, you
      must use a special string personality factor key. React uses keys to
      indicate which list items have been modified, destroyed, or altered. Or,
      to put it another way, we may say that keys are utilized to identify the
      components in lists. ReactJS Advantages React.js builds a customized
      virtual DOM. Because the JavaScript virtual DOM is quicker than the
      conventional DOM, this will enhance the performance of apps. ReactJS makes
      an amazing UI possible. Search - engine friendly ReactJS. Modules and
      valid data make larger apps easier to manage by increasing readability.
      React integrates various architectures. React makes the entire scripting
      environment process simpler. It makes advanced maintenance easier and
      boosts output. Guarantees quicker rendering The availability of a script
      for developing mobile apps is the best feature of React. ReactJS is
      supported by a large community. Advantages and Limitations (Pros and Cons)
      Advantages Makes use of the JavaScript structure known as virtual DOM.
      Since JavaScripts virtual DOM is quicker than the conventional DOM, this
      will boost the speed of programs. Can be used with various systems and on
      both client and server sides is commendable. Components and identify
      trends make larger apps easier to manage by increasing clarity.
      Limitations Only addresses the app angle and distance; as a result,
      additional techniques must be selected if you want a full collection of
      development tools. Employs inline scripting and JSX, which some
      programmers might find uncomfortable. Features of React React offers some
      outstanding features that make it the most widely adopted library for
      frontend app development. Here is the list of those salient features. JSX
      JSX. JSX is a JavaScript syntactic extension. Its a term used in React to
      describe how the user interface should seem. You can write HTML structures
      in the same file as JavaScript code by utilizing JSX. jsx The above code
      shows how JSX is implemented in React. It is neither a string nor HTML.
      Instead, it embeds HTML into JavaScript code. Virtual Document Object
      Model (DOM) Virtual_DOM The Virtual DOM is Reacts lightweight version of
      the Real DOM. Real DOM manipulation is substantially slower than virtual
      DOM manipulation. When an objects state changes, Virtual DOM updates only
      that object in the real DOM rather than all of them. What is the Document
      Object Model (DOM)? dom Fig: DOM of a Webpage DOM (Document Object Model)
      treats an XML or HTML document as a tree structure in which each node is
      an object representing a part of the document. How do Virtual DOM and
      React DOM interact with each other? When the state of an object changes in
      a React application, DOM gets updated. It then compares its previous
      state and then updates only those objects in the real DOM instead of
      updating all of the objects. This makes things move fast, especially when
      compared to other front-end technologies that have to update each object
      even if only a single object changes in the web application. Learn From
      The Best Mentors in the Industry! Automation Testing Masters
      ProgramEXPLORE PROGRAMLearn From The Best Mentors in the Industry!
      Architecture In a Model View Controller(MVC) architecture, React is the
      View responsible for how the app looks and feels. MVC is an architectural
      pattern that splits the application layer into Model, View, and
      Controller. The model relates to all data-related logic; the view is used
      for the UI logic of the application, and the controller is an interface
      between the Model and View. Extensions react_Extensions React goes beyond
      just being a UI framework; it contains many extensions that cover the
      entire application architecture. It helps the building of mobile apps and
      provides server-side rendering. Flux and Redux, among other things, can
      extend React. Data Binding Since React employs one-way data binding, all
      activities stay modular and quick. Moreover, the unidirectional data flow
      means that its common to nest child components within parent components
      when developing a React project. data-binding Fig: One-way data binding
      Debugging Since a broad developer community exists, React applications are
      straightforward and easy to test. Facebook provides a browser extension
      that simplifies and expedites React debugging. react-extension Fig: React
      Extension This extension, for example, adds a React tab in the developer
      tools option within the Chrome web browser. The tab makes it easy to
      inspect React components directly. Now that you know the key features of
      React, let’s move on to understanding the pillars of React. Components in
      React Components are the building blocks that comprise a React application
      representing a part of the user interface. ReactComponents. React
      separates the user interface into numerous components, making debugging
      more accessible, and each component has its own set of properties and
      functions. Here are some of the features of Components - Re-usability - A
      component used in one area of the application can be reused in another
      area. This helps speed up the development process. Nested Components - A
      component can contain several other components. Render method - In its
      minimal form, a component must define a render method that specifies how
      the component renders to the DOM. Passing properties - A component can
      also receive props. These are properties passed by its parent to specify
      values. Have a look at the demo for a better understanding. Consider two
      components, a Functional component and a Class Component with the
      following code. export default ClassComp; A class component comes with a
      render method that renders onto the screen. Export default is used to
      export only one object (function, variable, class) from the file. Only one
      default export per file is allowed. Evidently, these components are
      imported into the main component which is App.js in our case. import React
      from react; export default App; Once run, the browser will look like this.
      Components-React_Tutorial A named export or just export can also be used
      to export multiple objects from a file. Now that you have an understanding
      of React Components, move on to React Props. Do not miss out on the
      opportunity to become a Certified Professional with Simply learns Post
      Graduate Program in Full Stack Web Development. Enroll Today!
      {/* Main content goes here */
}
