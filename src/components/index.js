import * as Icons from '@material-ui/icons/';
import * as Charts from 'react-vis';
import * as Router from 'react-router-dom';
import Footer from './Footer';
import IconPopover from './IconPopover';
import ListItemTemplate from './ListItemTemplate';
import NotFoundPage from './NotFoundPage';
import TabsTemplate from './TabsTemplate';
import IconPage from './SideNavPages/IconPage'
import HomePage from './SideNavPages/HomePage'
import ColorsPage from './SideNavPages/ColorsPage'
import * as ComponentsPages from './SideNavPages/Components'
import * as ChartsPages from './SideNavPages/Charts'
import CodeBlock from './CodeBlock';
import ReactMarkdown from 'react-markdown'
import rootReducer from '../Redux/reducers/rootReducer.js'
import * as ActionCreators from '../Redux/actions/'



// export all components, Icons, Charts
export * from '@material-ui/core/';
export { Icons, Charts, Router, Footer, IconPopover, ListItemTemplate, NotFoundPage, TabsTemplate, IconPage, HomePage, ColorsPage, ComponentsPages, ChartsPages, CodeBlock, ReactMarkdown, rootReducer, ActionCreators};
