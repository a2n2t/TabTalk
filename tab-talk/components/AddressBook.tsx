import {FC} as React from 'react'

interface Props {
  association: string,
  username: string,
  upvotes: number,
  downvotes: number,
  //search?: (searchTerm: string) => {}[]
}

export const AddressBook: FC<Props> = ({association, username, upvotes, downvotes}) => {
  return (
    <>

    </>
  )
}
