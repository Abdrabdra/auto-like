import { Icon, IconButton } from '@mui/material'
import { FC, useEffect, useState } from 'react'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

import { useLikeAnnouncementMutation } from '@store/rtk-api/announcement-rtk/announcementEndpoints'
import { TypeofEntityEnum } from '@types/Announcement/announcement.enum'

interface Props {
	profilelike: string;
	id: number
}

const LikeButton: FC<Props> = ({ profilelike, id }) => {
	const [iconClick, setIconClick] = useState(profilelike)

	useEffect(() => {
		setIconClick(profilelike)
	}, [profilelike])

	const [like, { isLoading }] = useLikeAnnouncementMutation()


	const handleIconClick = () => {
		like({ announcementId: id, kind: TypeofEntityEnum.ANNOUNCEMENT })
	}

	return (
		<IconButton
			onClick={handleIconClick}
			sx={{
				width: '32px',
				height: '32px',
				minWidth: '32px',
				borderRadius: '5px',
				color: 'primary.main',
				backgroundColor: 'secondary.300'
			}}
		>
			<Icon
				component={iconClick === '0' ? FavoriteBorderIcon : FavoriteIcon}
			/>
		</IconButton>
	)
}

export default LikeButton
