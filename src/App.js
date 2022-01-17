import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import GamesContext from "./utils/GamesContext"
import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Games from "./pages/Games"
import Login from "./pages/Login"
import Users from "./pages/Users"

function App() {
  const [games, setGames] = useState([])
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const getGames = async () => {
    const response = await axios.get("https://park-api-final.herokuapp.com/api/games")
    setGames(response.data)
  }
  const getUsers = async () => {
    const response = await axios.get("https://park-api-final.herokuapp.com/api/auth/users", {
      headers: {
        Authorization: localStorage.tokenDashboard,
      },
    })
    setUsers(response.data)
  }
  useEffect(() => {
    getGames()
    getUsers()
  }, [])
  const deleteGame = async gameId => {
    try {
      await axios.delete(`https://park-api-final.herokuapp.com/api/games/${gameId}`, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      toast.success("game deleted")
      getGames()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("https://park-api-final.herokuapp.com/api/auth/login/admin", adminBody)
      localStorage.tokenDashboard = response.data
      toast.success("login success")
      navigate("/games")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const editGame = async (e, gameId) => {
    e.preventDefault()
    try {
      const form = e.target

      const gameBody = {
        name: form.elements.name.value,
        image: form.elements.image.value,
        // video: form.elements.video.value,
        price: form.elements.price.value,
      }
      await axios.put(`https://park-api-final.herokuapp.com/api/games/${gameId}`, gameBody, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      getGames()
      toast.success("Edit Games")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const addGame = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const gameBody = {
        name: form.elements.name.value,
        image: form.elements.image.value,
        // video: form.elements.video.value,
        price: form.elements.price.value,
      }
      await axios.post(`https://park-api-final.herokuapp.com/api/games`, gameBody, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      getGames()
      toast.success("Add Games")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const logout = () => {
    localStorage.removeItem("tokenDashboard")
  }

  // --------------- هنا اضافةأدمن ممكن أحذفه

  const addAdmin = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const adminBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post(`https://park-api-final.herokuapp.com/api/auth/add-admin`, adminBody, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      getUsers()
      toast.success("Add admin")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const deleteUser = async userId => {
    try {
      await axios.delete(`https://park-api-final.herokuapp.com/api/auth/users/${userId}`, {
        headers: {
          Authorization: localStorage.tokenDashboard,
        },
      })
      toast.success("user deleted")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const store = {
    games,
    users,
    addGame,
    editGame,
    deleteGame,
    login,
    logout,
    addAdmin,
    deleteUser,
  }

  return (
    <GamesContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route path="/games" element={localStorage.tokenDashboard ? <Games /> : <Navigate to="/login" />} />
            <Route path="/users" element={localStorage.tokenDashboard ? <Users /> : <Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </Box>
    </GamesContext.Provider>
  )
}

export default App
