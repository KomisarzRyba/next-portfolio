'use client';

import { Button } from '@/components/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from '@/components/ui/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

interface PostFilterMenuProps {
	tags: string[];
	filter: string[];
	setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

const PostFilterMenu: React.FC<PostFilterMenuProps> = ({
	tags,
	filter,
	setFilter,
}) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div className='flex gap-2'>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant='outline'
						role='combobox'
						aria-expanded={open}
						className='justify-between'
					>
						Filter
						<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-[200px] p-0 mr-8'>
					<Command>
						<CommandInput placeholder='Search tags...' />
						<CommandEmpty>No tags found.</CommandEmpty>
						<CommandGroup>
							{tags.map((tag) => (
								<CommandItem
									key={tag}
									onSelect={(tag) => {
										setFilter(
											filter.includes(tag)
												? filter.filter(
														(t) => t !== tag
												  )
												: [...filter, tag]
										);
										setOpen(false);
									}}
								>
									<Check
										className={cn(
											'mr-2 h-4 w-4',
											filter.includes(tag)
												? 'opacity-100'
												: 'opacity-0'
										)}
									/>
									{tag}
								</CommandItem>
							))}
						</CommandGroup>
					</Command>
				</PopoverContent>
			</Popover>
			{filter.length > 0 && (
				<Button
					variant='secondary'
					onClick={() => {
						setFilter([]);
					}}
				>
					Clear filters
				</Button>
			)}
		</div>
	);
};

export default PostFilterMenu;
