// 应用程序的起点
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

const App = () => (
  // 这将包装整个应用程序
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes> {/* 这是 react-router-dom 的内置组件 */}
        <Route exact path='/' element={<Feed />} />  {/* 根路由 */}
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
