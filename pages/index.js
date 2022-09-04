import React, { useState, useEffect } from 'react'

const inputElement = () => {
  const randomBoolean = Math.random() >= 0.5

  if (randomBoolean === true) {
    const [isLoading, setIsLoading] = useState(true)
  } else {
    const [isLoading, setIsLoading] = useState(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  })
}
