"use client"
import {Toaster as ToasterProvider} from "react-hot-toast"
export const Toaster = () => {
  return (
    <ToasterProvider
    //position="bottom-center"
    toastOptions={{
      success: {
        style: {
          background: '#a659f2',
          color: '#fff',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#a659f2',
        },
      },
      error: {
        style: {
          background: '#ef4444',
          color: '#fff',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#ef4444',
        },
      },
    }}
    />
  )
}