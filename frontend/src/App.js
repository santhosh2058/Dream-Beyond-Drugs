import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "/components/Layout/Home";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
 return (
  
 
 <div className="App">
       <link
      rel="stylesheet"
      type="text/css"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      href="//db.onlinewebfonts.com/c/157c6cc36dd65b1b2adc9e7f3329c761?family=Amazon+Ember"
      rel="stylesheet"
      type="text/css"
    />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
    <Router>
    <Header/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/login' Component={LoginCorner}/>
      <Route path='/articles' Component={Articles}/>
      <Route path='/faqs'Component={Faqs}/>
      <Route path='/admin/login' Component={Login}/>
      <Route path='/user' Component={User}/>
      <Route path='/volunteer' Component={Volunteer}/>
      <Route path='/admin' element={
      <ProtectedRoute isLoggedIn={isAuthenticated}>
        <Admin/>
      </ProtectedRoute>
    } exact/>
    <Route path='/admin' element={
      <ProtectedRoute isLoggedIn={isAuthenticated}>
        <Admin/>
      </ProtectedRoute>
    } exact/>
    <Route path='/admin/pendingrequest' element={
      <ProtectedRoute isLoggedIn={isAuthenticated}>
        <PendingRequest/>
      </ProtectedRoute>
    } exact/>
        <Route path='/admin/volunteers' element={
      <ProtectedRoute isLoggedIn={isAuthenticated}>
        <Volunteers/>
      </ProtectedRoute>
    } exact/>
     <Route path='/admin/counselor' element={
      <ProtectedRoute isLoggedIn={isAuthenticated}>
        <CounselorProfile/>
      </ProtectedRoute>
    } exact/>
    <Route path='/admin/counselors' element={
      <ProtectedRoute isLoggedIn={isAuthenticated}>
        <CounselorList/>
      </ProtectedRoute>
    } exact/>
    <Route path='/admin/response' element={
      <ProtectedRoute isLoggedIn={isAuthenticated}>
        <Response/>
      </ProtectedRoute>
    } exact/>
     <Route path='/counselor/register' Component={Register}/>
     <Route path='/counselor/login' Component={LoginCounselor}/>
     <Route path='/counselor' element={
      <ProtectedRoute isLoggedIn={isAuthenticatedCounselor}>
      <Counselor/>
      </ProtectedRoute>
    } exact/>
   <Route path='/counselor/myprofile' element={
      <ProtectedRoute isLoggedIn={isAuthenticatedCounselor}>
      <MyProfile/>
      </ProtectedRoute>
    } exact/>

    <Route path='/counselor/underprocess' element={
      <ProtectedRoute isLoggedIn={isAuthenticatedCounselor}>
      <UnderProcess/>
      </ProtectedRoute>
    } exact/>
    </Routes>
    </Router>

 
 </div>
 );
};

export default App;