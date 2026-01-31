import React from 'react'

const MiniSwirl = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 98 63" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="25.5" y="2" width="11.75" height="11.75" stroke="currentColor" strokeWidth="2"/>
    <rect x="25.5" y="13.749" width="11.75" height="11.75" stroke="currentColor" strokeWidth="2"/>
    <rect x="2" y="2" width="23.5" height="23.5" stroke="currentColor" strokeWidth="2"/>
    <rect x="2" y="25.5" width="35.25" height="35.25" stroke="currentColor" strokeWidth="2"/>
    <rect x="37.25" y="2" width="58.7499" height="58.7499" stroke="currentColor" strokeWidth="2"/>
    <path d="M25.5 25.5C31.9893 25.5 37.25 20.2393 37.25 13.75C37.25 7.26065 31.9893 2 25.5 2" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 25.5C2 12.5213 12.5213 2 25.5 2" stroke="currentColor" strokeWidth="2"/>
    <path d="M37.25 60.75C17.7819 60.75 2 44.968 2 25.5" stroke="currentColor" strokeWidth="2"/>
    <path d="M96 2C96 34.5848 69.5848 61 37 61" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export default MiniSwirl
