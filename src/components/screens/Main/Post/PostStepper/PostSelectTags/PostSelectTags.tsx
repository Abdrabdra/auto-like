import { Skeleton, Stack, Typography } from "@mui/material"

import StepperAccordion from "@components/modules/StepperAccordion"
import { useGetDescriptionsQuery } from "@store/rtk-api/marka-rtk/markaEndpoints"
import StepperTags from "./StepperTags"

const PostSelectTags = () => {
	const { data, isLoading, isSuccess } = useGetDescriptionsQuery("")

	return (
		<Stack>
			{isLoading ? (
				<>
					<Skeleton animation="wave" />
					<Skeleton animation="wave" />
					<Skeleton animation="wave" />
				</>
			) : isSuccess ? (
				<Stack spacing={1}>
					{data.map((row) => (
						<StepperAccordion key={row.id} summary={row.title}>
							<StepperTags data={row} />
						</StepperAccordion>
					))}
				</Stack>
			) : (
				<>Ошибка при загрузки</>
			)}
		</Stack>
	)
}

export default PostSelectTags
