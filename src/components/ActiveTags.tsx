import { AnimatePresence, motion } from 'framer-motion';
import React, { HTMLAttributes } from 'react';
import { Badge } from './ui/badge';
import { ScrollArea, ScrollBar } from './ui/scroll-area';

interface ActiveTagsProps extends HTMLAttributes<HTMLDivElement> {
	filter: string[];
	setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

const ActiveTags: React.FC<ActiveTagsProps> = ({
	filter,
	setFilter,
	className,
}) => {
	return (
		<ScrollArea orientation='horizontal' className={className}>
			<div className='inline-flex flex-nowrap items-end gap-2 w-full h-full'>
				<AnimatePresence>
					{filter.length > 0 &&
						filter.map((tag) => (
							<motion.div
								key={tag}
								layout
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0 }}
								transition={{ duration: 0.1 }}
								className='w-fit'
							>
								<Badge
									className='cursor-pointer w-fit'
									onClick={() => {
										setFilter((prev) =>
											prev.filter((t) => t !== tag)
										);
									}}
								>
									{tag}
								</Badge>
							</motion.div>
						))}
				</AnimatePresence>
			</div>
		</ScrollArea>
	);
};

export default ActiveTags;
