"use client";

import Link from 'next/link'
import React from 'react'

import { usePathname } from 'next/navigation'
import style from '../ActiveLink.module.css';


interface Props{
    path: string,
    title: string

}

const ActiveLink = ({path, title}: Props) => {
  const pathName = usePathname()
  return (
    <Link href={path} className={` hover:underline ${(pathName == path) && style['active-link']}`}>
                {title}
            </Link>
  )
}

export default ActiveLink