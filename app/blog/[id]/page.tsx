import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// 完整的文章数据
const blogPosts = [
  {
    id: "1",
    title: "构建高性能的 React 应用",
    description: "探讨如何通过代码分割、懒加载和性能监控来优化 React 应用的加载速度和运行时性能。",
    date: "2024-03-15",
    tags: ["React", "Performance", "Web Development"],
    readTime: "8 分钟",
    content: `
      <p>在现代 Web 开发中，性能优化是一个永恒的话题。随着应用规模的增长，如何保持应用的响应速度和流畅度成为了开发者面临的重要挑战。本文将深入探讨如何构建高性能的 React 应用，从代码分割、懒加载到性能监控，全方位提升应用性能。</p>
      
      <h2>代码分割的重要性</h2>
      <p>代码分割是优化 React 应用性能的第一步。通过将应用拆分成更小的块，我们可以实现按需加载，减少初始加载时间。在 React 应用中，我们可以使用动态 import() 语法来实现代码分割：</p>
      
      <pre><code>
// 不使用代码分割
import LargeComponent from './LargeComponent';

// 使用代码分割
const LargeComponent = React.lazy(() => import('./LargeComponent'));
      </code></pre>
      
      <p>这种方式特别适合那些不是立即需要的组件，比如模态框、复杂的表单或者只在特定路由下才会显示的组件。通过代码分割，我们可以显著减少应用的初始加载时间，提升用户体验。</p>
      
      <h2>懒加载组件</h2>
      <p>React 提供了 React.lazy 和 Suspense API，让我们可以轻松实现组件的懒加载。这对于大型应用来说尤其重要。使用 Suspense 可以在组件加载过程中显示一个加载状态：</p>
      
      <pre><code>
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
      </code></pre>
      
      <p>懒加载不仅适用于组件，也适用于路由。在 React Router 中，我们可以结合 React.lazy 实现路由级别的代码分割：</p>
      
      <pre><code>
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';

const Home = React.lazy(() => import('./routes/Home'));
const About = React.lazy(() => import('./routes/About'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
}
      </code></pre>
      
      <h2>性能监控</h2>
      <p>使用 React DevTools Profiler 和 Web Vitals 等工具，我们可以准确地测量和监控应用的性能指标，从而有针对性地进行优化。React DevTools Profiler 可以帮助我们识别渲染过程中的性能瓶颈：</p>
      
      <p>对于生产环境的性能监控，我们可以使用 web-vitals 库来收集核心 Web 指标：</p>
      
      <pre><code>
import { getCLS, getFID, getLCP } from 'web-vitals';

function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  // 使用 \`navigator.sendBeacon()\` 如果可用，否则使用 \`fetch()\`
  (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
    fetch('/analytics', { body, method: 'POST', keepalive: true });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);
      </code></pre>
      
      <h2>其他优化技巧</h2>
      <p>除了上述方法外，还有一些其他的优化技巧：</p>
      
      <ul>
        <li><strong>使用 React.memo 避免不必要的重渲染</strong>：对于纯展示型组件，可以使用 React.memo 来避免不必要的重渲染。</li>
        <li><strong>使用 useCallback 和 useMemo 优化性能</strong>：这两个 Hook 可以帮助我们缓存函数和计算结果，避免在每次渲染时重新创建。</li>
        <li><strong>虚拟化长列表</strong>：对于长列表，可以使用 react-window 或 react-virtualized 等库来实现虚拟化，只渲染可见区域的内容。</li>
        <li><strong>图片优化</strong>：使用适当的图片格式和大小，考虑使用 WebP 格式和响应式图片。</li>
      </ul>
      
      <h2>总结</h2>
      <p>构建高性能的 React 应用需要从多个方面入手，包括代码分割、懒加载、性能监控等。通过合理使用这些技术，我们可以显著提升应用的加载速度和运行时性能，为用户提供更好的体验。</p>
    `,
  },
  {
    id: "2",
    title: "Next.js 15 新特性深度解析",
    description: "详细介绍 Next.js 15 带来的新功能，包括改进的服务器组件、增强的路由系统和更好的开发体验。",
    date: "2024-03-08",
    tags: ["Next.js", "React", "Framework"],
    readTime: "12 分钟",
    content: `
      <p>Next.js 作为 React 生态系统中最流行的框架之一，一直在不断创新和改进。随着 Next.js 15 的发布，框架带来了许多令人兴奋的新特性和改进。本文将深入解析 Next.js 15 的主要新特性，帮助开发者更好地理解和应用这些变化。</p>
      
      <h2>改进的服务器组件</h2>
      <p>Next.js 15 对服务器组件进行了重大改进，使其更加强大和灵活。服务器组件现在可以更好地与客户端组件集成，数据获取变得更加简单和高效。</p>
      
      <pre><code>
// 服务器组件示例
async function BlogPosts() {
  const posts = await getPosts();
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <ClientSideComponent postId={post.id} />
        </article>
      ))}
    </div>
  );
}
      </code></pre>
      
      <p>服务器组件的主要优势在于它们可以直接在服务器上获取数据，减少了客户端的 JavaScript 负担，并提高了应用的性能和 SEO 友好性。</p>
      
      <h2>增强的路由系统</h2>
      <p>Next.js 15 进一步增强了其基于文件系统的路由系统，引入了更多的灵活性和功能。新的路由系统支持更复杂的路由模式，包括嵌套路由、动态路由和平行路由。</p>
      
      <pre><code>
// app/blog/[category]/[id]/page.js
export default function BlogPost({ params }) {
  const { category, id } = params;
  
  return (
    <div>
      <h1>Blog Post {id} in category {category}</h1>
      {/* 内容 */}
    </div>
  );
}
      </code></pre>
      
      <p>此外，Next.js 15 还引入了拦截路由（Intercepting Routes）的概念，允许开发者在不改变 URL 的情况下显示不同的内容，这对于实现模态框和幻灯片等 UI 模式非常有用。</p>
      
      <h2>更好的开发体验</h2>
      <p>Next.js 15 在开发体验方面做了大量改进，包括更快的编译速度、更好的错误处理和更详细的开发日志。</p>
      
      <p>Turbopack 现在已经更加稳定，并成为 Next.js 开发服务器的默认引擎，提供了比 Webpack 快得多的开发体验。此外，Next.js 15 还引入了新的开发工具，如改进的热模块替换（HMR）和更好的类型检查集成。</p>
      
      <h2>图像和字体优化</h2>
      <p>Next.js 15 对图像和字体组件进行了进一步优化，提供了更好的性能和用户体验。新的图像组件支持更多的格式和优化选项，而字体系统则提供了更好的字体加载策略。</p>
      
      <pre><code>
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={inter.className}>
      <h1>Welcome to my site</h1>
      <Image
        src="/hero.jpg"
        alt="Hero image"
        width={1200}
        height={600}
        priority
      />
    </main>
  );
}
      </code></pre>
      
      <h2>中间件增强</h2>
      <p>Next.js 15 增强了中间件功能，使其更加强大和灵活。中间件现在可以更好地处理请求和响应，支持更多的用例，如身份验证、重定向和请求修改。</p>
      
      <pre><code>
// middleware.js
export function middleware(request) {
  const currentUser = request.cookies.get('currentUser');
  
  if (!currentUser && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)'],
};
      </code></pre>
      
      <h2>总结</h2>
      <p>Next.js 15 带来了许多令人兴奋的新特性和改进，从服务器组件到路由系统，再到开发体验，都有显著的提升。这些变化使 Next.js 更加强大和灵活，能够更好地满足现代 Web 应用开发的需求。</p>
      
      <p>随着 Next.js 的不断发展，我们可以期待它在未来带来更多创新，继续引领 React 生态系统的发展方向。</p>
    `,
  },
  {
    id: "3",
    title: "TypeScript 类型体操实战",
    description: "通过实际案例学习 TypeScript 的高级类型系统，掌握泛型、条件类型和映射类型的使用技巧。",
    date: "2024-02-28",
    tags: ["TypeScript", "Programming"],
    readTime: "15 分钟",
    content: `
      <p>TypeScript 的类型系统非常强大，但也相当复杂。许多开发者只使用了其基本功能，而没有深入探索其高级特性。本文将通过实际案例，带你深入了解 TypeScript 的"类型体操"，掌握泛型、条件类型和映射类型等高级特性的使用技巧。</p>
      
      <h2>泛型：类型的参数化</h2>
      <p>泛型是 TypeScript 中最强大的特性之一，它允许我们创建可重用的组件，这些组件可以与多种类型一起工作，而不是单一类型。</p>
      
      <pre><code>
// 基本泛型函数
function identity<T>(arg: T): T {
  return arg;
}

// 使用
const num = identity(42);  // 类型为 number
const str = identity("hello");  // 类型为 string
      </code></pre>
      
      <p>泛型不仅可以用于函数，还可以用于接口、类和类型别名：</p>
      
      <pre><code>
// 泛型接口
interface Box<T> {
  value: T;
}

// 泛型类
class Container<T> {
  private item: T;
  
  constructor(item: T) {
    this.item = item;
  }
  
  getItem(): T {
    return this.item;
  }
}

// 泛型类型别名
type Pair<T, U> = {
  first: T;
  second: U;
};
      </code></pre>
      
      <h2>条件类型：类型级别的条件逻辑</h2>
      <p>条件类型允许我们根据类型关系来选择不同的类型，类似于类型级别的 if-else 语句。</p>
      
      <pre><code>
// 基本条件类型
type IsString<T> = T extends string ? true : false;

// 使用
type A = IsString<"hello">;  // true
type B = IsString<42>;  // false
      </code></pre>
      
      <p>条件类型与泛型结合使用，可以创建非常强大的类型工具：</p>
      
      <pre><code>
// 从联合类型中排除某些类型
type Exclude<T, U> = T extends U ? never : T;

// 使用
type C = Exclude<string | number | boolean, boolean>;  // string | number
      </code></pre>
      
      <h2>映射类型：批量转换属性</h2>
      <p>映射类型允许我们基于旧类型创建新类型，通过遍历旧类型的所有属性并应用转换。</p>
      
      <pre><code>
// 基本映射类型
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// 使用
interface Person {
  name: string;
  age: number;
}

type ReadonlyPerson = Readonly<Person>;
// 等价于：
// {
//   readonly name: string;
//   readonly age: number;
// }
      </code></pre>
      
      <p>TypeScript 内置了几个有用的映射类型，如 Partial、Required、Readonly 和 Pick：</p>
      
      <pre><code>
// Partial：将所有属性变为可选
type PartialPerson = Partial<Person>;  // { name?: string; age?: number; }

// Required：将所有属性变为必需
type RequiredPerson = Required<PartialPerson>;  // { name: string; age: number; }

// Pick：从类型中选择部分属性
type NameOnly = Pick<Person, 'name'>;  // { name: string; }
      </code></pre>
      
      <h2>高级类型体操实例</h2>
      <p>现在，让我们看一些更复杂的类型体操实例，这些实例结合了泛型、条件类型和映射类型。</p>
      
      <h3>DeepReadonly：递归地将所有属性变为只读</h3>
      <pre><code>
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// 使用
interface NestedObject {
  name: string;
  settings: {
    theme: string;
    notifications: boolean;
  };
}

type ReadonlyNestedObject = DeepReadonly<NestedObject>;
      </code></pre>
      
      <h3>FunctionProperties：提取对象中的函数属性</h3>
      <pre><code>
type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

// 使用
interface Component {
  id: string;
  render: () => void;
  update: (newProps: any) => void;
}

type ComponentMethods = FunctionProperties<Component>;  // { render: () => void; update: (newProps: any) => void; }
      </code></pre>
      
      <h2>实际应用场景</h2>
      <p>这些高级类型技术在实际开发中有许多应用场景：</p>
      
      <ul>
        <li><strong>API 类型定义</strong>：使用条件类型和映射类型可以根据请求参数自动推导响应类型。</li>
        <li><strong>状态管理</strong>：在 Redux 或其他状态管理库中，可以使用高级类型来确保类型安全。</li>
        <li><strong>表单处理</strong>：可以基于表单数据结构自动生成表单验证类型。</li>
        <li><strong>类型安全的事件系统</strong>：使用泛型和条件类型可以创建类型安全的事件发布/订阅系统。</li>
      </ul>
      
      <h2>总结</h2>
      <p>TypeScript 的类型系统非常强大，通过掌握泛型、条件类型和映射类型等高级特性，我们可以创建更加类型安全和可维护的代码。虽然这些"类型体操"可能看起来复杂，但它们可以帮助我们在编译时捕获更多错误，减少运行时问题。</p>
      
      <p>随着实践的增加，你会发现这些高级类型技术不仅有用，而且可以极大地提高你的 TypeScript 开发效率和代码质量。</p>
    `,
  },
  {
    id: "4",
    title: "现代 CSS 布局技术指南",
    description: "从 Flexbox 到 Grid，再到最新的容器查询，全面了解现代 CSS 布局的最佳实践。",
    date: "2024-02-20",
    tags: ["CSS", "Design", "Web Development"],
    readTime: "10 分钟",
    content: `
      <p>CSS 布局技术在过去几年中发生了革命性的变化。从传统的浮动和定位，到现代的 Flexbox 和 Grid，再到最新的容器查询，CSS 布局变得越来越强大和灵活。本文将全面介绍现代 CSS 布局技术，帮助你掌握最佳实践。</p>
      
      <h2>Flexbox：一维布局的利器</h2>
      <p>Flexbox（弹性盒子）是一种一维布局模型，它提供了强大的空间分配和对齐能力，特别适合处理行或列的布局。</p>
      
      <pre><code>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  flex: 1;
  margin: 0 10px;
}
      </code></pre>
      
      <p>Flexbox 的主要特点包括：</p>
      
      <ul>
        <li><strong>方向控制</strong>：可以轻松控制项目的排列方向（水平或垂直）。</li>
        <li><strong>对齐控制</strong>：提供了多种对齐方式，包括主轴和交叉轴的对齐。</li>
        <li><strong>空间分配</strong>：可以灵活地分配容器内的空间。</li>
        <li><strong>顺序控制</strong>：可以改变项目的视觉顺序，而不影响 HTML 结构。</li>
      </ul>
      
      <p>Flexbox 特别适合以下场景：</p>
      
      <ul>
        <li>导航栏和菜单</li>
        <li>卡片布局</li>
        <li>居中内容</li>
        <li>等高列</li>
      </ul>
      
      <h2>Grid：二维布局的强大工具</h2>
      <p>CSS Grid 是一种二维布局系统，它允许你同时控制行和列，创建复杂的网格布局。</p>
      
      <pre><code>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}

.item {
  grid-column: span 2;
}
      </code></pre>
      
      <p>Grid 的主要特点包括：</p>
      
      <ul>
        <li><strong>二维控制</strong>：同时控制行和列的布局。</li>
        <li><strong>网格线</strong>：可以基于网格线放置项目。</li>
        <li><strong>网格区域</strong>：可以命名网格区域，简化布局。</li>
        <li><strong>自动放置算法</strong>：自动放置项目，减少手动定位的需要。</li>
      </ul>
      
      <p>Grid 特别适合以下场景：</p>
      
      <ul>
        <li>整页布局</li>
        <li>杂志风格的布局</li>
        <li>图库和卡片网格</li>
        <li>不规则布局</li>
      </ul>
      
      <h2>容器查询：响应式设计的新维度</h2>
      <p>容器查询是 CSS 的一个新特性，它允许你基于容器的大小而不是视口的大小来应用样式。这为组件级的响应式设计提供了新的可能性。</p>
      
      <pre><code>
.container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card-content {
    display: flex;
  }
}
      </code></pre>
      
      <p>容器查询的主要优势包括：</p>
      
      <ul>
        <li><strong>组件级响应式</strong>：组件可以根据其容器的大小而不是整个视口来调整其布局。</li>
        <li><strong>可重用性</strong>：同一组件可以在不同上下文中有不同的布局。</li>
        <li><strong>嵌套响应</strong>：可以创建嵌套的响应式布局。</li>
      </ul>
      
      <h2>CSS 子网格：网格中的网格</h2>
      <p>子网格是 CSS Grid 的一个扩展，它允许网格项目继承其父网格的网格线。这使得创建复杂的嵌套网格布局变得更加简单。</p>
      
      <pre><code>
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
}

.child {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
}
      </code></pre>
      
      <h2>多列布局：报纸风格的布局</h2>
      <p>CSS 多列布局允许你创建类似报纸或杂志的多列文本布局，内容可以在列之间自动流动。</p>
      
      <pre><code>
.content {
  column-count: 3;
  column-gap: 2em;
  column-rule: 1px solid #ddd;
}

.content h2 {
  column-span: all;
}
      </code></pre>
      
      <h2>最佳实践和布局策略</h2>
      <p>在实际开发中，我们通常会结合使用这些布局技术，根据不同的需求选择最合适的工具。以下是一些最佳实践：</p>
      
      <ul>
        <li><strong>布局优先级</strong>：先考虑整体布局（Grid），再考虑组件内部布局（Flexbox）。</li>
        <li><strong>响应式策略</strong>：结合媒体查询和容器查询，创建真正响应式的设计。</li>
        <li><strong>回退方案</strong>：为不支持现代布局技术的浏览器提供回退方案。</li>
        <li><strong>性能考虑</strong>：避免过度嵌套和复杂的布局计算，以保持良好的性能。</li>
      </ul>
      
      <h2>总结</h2>
      <p>现代 CSS 布局技术为我们提供了前所未有的布局能力。通过掌握 Flexbox、Grid、容器查询等技术，我们可以创建更加灵活、响应式和可维护的布局。</p>
      
      <p>随着浏览器对这些技术的支持不断改进，我们可以期待 CSS 布局在未来变得更加强大和易用。作为前端开发者，持续学习和实践这些技术将帮助我们创建更好的用户体验。</p>
    `,
  },
  {
    id: "5",
    title: "构建可访问的 Web 应用",
    description: "学习如何创建符合 WCAG 标准的无障碍 Web 应用，让每个人都能平等地访问你的网站。",
    date: "2024-02-12",
    tags: ["Accessibility", "Web Development"],
    readTime: "11 分钟",
    content: `
      <p>Web 可访问性（Accessibility，简称 a11y）是确保所有人，包括残障人士，都能平等地访问和使用 Web 内容的实践。构建可访问的 Web 应用不仅是一种道德责任，在许多国家和地区，这也是法律要求。本文将介绍如何创建符合 WCAG（Web 内容可访问性指南）标准的无障碍 Web 应用。</p>
      
      <h2>理解 WCAG 标准</h2>
      <p>WCAG 是由 W3C 制定的一系列指南，旨在使 Web 内容对残障人士更加可访问。WCAG 2.1 基于四个主要原则：</p>
      
      <ul>
        <li><strong>可感知（Perceivable）</strong>：信息和用户界面组件必须以用户可以感知的方式呈现。</li>
        <li><strong>可操作（Operable）</strong>：用户界面组件和导航必须是可操作的。</li>
        <li><strong>可理解（Understandable）</strong>：信息和用户界面的操作必须是可理解的。</li>
        <li><strong>健壮（Robust）</strong>：内容必须足够健壮，以便能被各种用户代理（包括辅助技术）可靠地解释。</li>
      </ul>
      
      <h2>语义化 HTML</h2>
      <p>使用语义化的 HTML 是构建可访问性 Web 应用的基础。语义化 HTML 不仅提供了结构，还传达了内容的含义。</p>
      
      <pre><code>
<!-- 不好的例子 -->
<div class="header">
  <div class="title">网站标题</div>
</div>
<div class="nav">
  <div class="nav-item">首页</div>
  <div class="nav-item">关于</div>
</div>

<!-- 好的例子 -->
<header>
  <h1>网站标题</h1>
</header>
<nav>
  <ul>
    <li><a href="/">首页</a></li>
    <li><a href="/about">关于</a></li>
  </ul>
</nav>
      </code></pre>
      
      <p>使用正确的语义化元素，如 <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code> 等，可以帮助屏幕阅读器和其他辅助技术更好地理解页面结构。</p>
      
      <h2>键盘可访问性</h2>
      <p>许多用户依赖键盘而非鼠标来导航网页。确保所有交互元素都可以通过键盘访问和操作是非常重要的。</p>
      
      <pre><code>
<!-- 确保自定义组件可以通过键盘访问 -->
<div 
  role="button" 
  tabindex="0" 
  onclick="handleClick()" 
  onkeydown="handleKeyDown(event)"
>
  点击我
</div>

<script>
  function handleKeyDown(event) {
    // 当用户按下 Enter 或空格键时触发点击
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  }
  
  function handleClick() {
    // 处理点击逻辑
  }
</script>
      </code></pre>
      
      <p>此外，确保焦点顺序合理，并提供可见的焦点指示器，这对键盘用户来说非常重要。</p>
      
      <h2>ARIA 属性</h2>
      <p>ARIA（Accessible Rich Internet Applications）是一组属性，可以添加到 HTML 元素上，以提供额外的语义信息和增强可访问性。</p>
      
      <pre><code>
<!-- 使用 ARIA 标签和角色 -->
<div 
  role="alert" 
  aria-live="assertive"
>
  表单提交成功！
</div>

<!-- 使用 ARIA 描述复杂控件 -->
<div 
  role="combobox" 
  aria-expanded="false" 
  aria-owns="dropdown-list" 
  aria-haspopup="listbox"
>
  选择一个选项
</div>
<ul 
  id="dropdown-list" 
  role="listbox" 
  aria-hidden="true"
>
  <li role="option">选项 1</li>
  <li role="option">选项 2</li>
</ul>
      </code></pre>
      
      <p>但要注意，ARIA 应该谨慎使用。如果可以使用原生 HTML 元素实现相同的功能，那么应该优先使用原生元素。</p>
      
      <h2>颜色和对比度</h2>
      <p>确保文本和背景之间有足够的对比度，这对于视力障碍用户非常重要。WCAG 2.1 要求：</p>
      
      <ul>
        <li>AA 级：普通文本的对比度至少为 4.5:1，大文本至少为 3:1。</li>
        <li>AAA 级：普通文本的对比度至少为 7:1，大文本至少为 4.5:1。</li>
      </ul>
      
      <p>此外，不要仅仅依赖颜色来传达信息，应该结合使用其他视觉提示，如图标、文本或模式。</p>
      
      <h2>图像和多媒体</h2>
      <p>为所有非装饰性图像提供替代文本，为视频提供字幕和音频描述，为音频提供文本记录。</p>
      
      <pre><code>
<!-- 信息性图像 -->
<img src="chart.png" alt="2023年第一季度销售数据图表，显示销售额增长了20%">

<!-- 装饰性图像 -->
<img src="decoration.png" alt="">

<!-- 视频 -->
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="captions" src="captions.vtt" srclang="zh" label="中文字幕">
  <track kind="descriptions" src="descriptions.vtt" srclang="zh" label="中文音频描述">
</video>
      </code></pre>
      
      <h2>表单可访问性</h2>
      <p>表单是用户与网站交互的主要方式之一，确保表单可访问对于创建包容性体验至关重要。</p>
      
      <pre><code>
<!-- 可访问的表单 -->
<form>
  <div>
    <label for="name">姓名</label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      aria-required="true" 
      aria-describedby="name-error"
    >
    <div id="name-error" class="error" aria-live="polite"></div>
  </div>
  
  <div>
    <label for="email">邮箱</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      aria-required="true"
    >
  </div>
  
  <button type="submit">提交</button>
</form>
      </code></pre>
      
      <p>关键点包括：</p>
      
      <ul>
        <li>使用 <code>&lt;label&gt;</code> 元素关联表单控件</li>
        <li>提供清晰的错误消息和验证反馈</li>
        <li>确保表单可以通过键盘完成</li>
        <li>使用 <code>aria-required</code>, <code>aria-describedby</code> 等属性提供额外信息</li>
      </ul>
      
      <h2>响应式设计和缩放</h2>
      <p>确保你的网站在不同设备上都能正常工作，并支持文本缩放和页面缩放，这对于视力障碍用户非常重要。</p>
      
      <pre><code>
/* 使用相对单位 */
body {
  font-size: 16px;
}

h1 {
  font-size: 2em;  /* 32px */
}

p {
  font-size: 1rem;
  line-height: 1.5;
}

/* 确保内容在缩放时不会被截断 */
.container {
  max-width: 100%;
  overflow-x: auto;
}
      </code></pre>
      
      <h2>测试和工具</h2>
      <p>定期测试你的网站可访问性是非常重要的。有许多工具可以帮助你进行可访问性测试：</p>
      
      <ul>
        <li><strong>自动化工具</strong>：如 Axe, WAVE, Lighthouse 等。</li>
        <li><strong>屏幕阅读器</strong>：如 NVDA, JAWS, VoiceOver 等。</li>
        <li><strong>键盘测试</strong>：尝试仅使用键盘导航你的网站。</li>
        <li><strong>对比度检查器</strong>：确保颜色对比度符合 WCAG 标准。</li>
      </ul>
      
      <h2>总结</h2>
      <p>构建可访问的 Web 应用是一个持续的过程，需要在设计和开发的各个阶段都考虑可访问性。通过遵循 WCAG 标准，使用语义化 HTML，确保键盘可访问性，正确使用 ARIA，注意颜色对比度，为多媒体提供替代内容，以及创建可访问的表单，我们可以创建真正包容所有用户的 Web 体验。</p>
      
      <p>记住，可访问性不仅仅是为了残障用户，它最终会提升所有用户的体验。通过构建可访问的 Web 应用，我们可以确保每个人都能平等地访问和使用我们的内容。</p>
    `,
  },
];

// 获取文章数据
const getPost = (id: string) => {
  const post = blogPosts.find(post => post.id === id);
  return post || blogPosts[0]; // 如果找不到对应ID的文章，返回第一篇
}

export default function BlogPostPage({ params }: any) {
  const post = getPost(params.id)

  return (
    <div className="space-y-8">
      <Link href="/blog">
        <Button variant="ghost" size="sm" className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          返回文章列表
        </Button>
      </Link>

      <article className="prose prose-slate dark:prose-invert mx-auto">
        <h1 className="mb-2">{post.title}</h1>
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-2">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div
          className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:leading-relaxed prose-p:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}
