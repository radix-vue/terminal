import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { SwitchClass, type SwitchClassProps } from "@ui/cva";
import { twMerge } from "tailwind-merge";


export const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & SwitchClassProps
>(({ variant, size, className, ...props }, ref) => (
	<SwitchPrimitive.Root
		className={twMerge([
			SwitchClass({ size, variant, component: "root" }),
			className,
		])}
		{...props}
		ref={ref}
	>
		<SwitchPrimitive.Thumb
			className={twMerge([
				SwitchClass({ size, variant, component: "thumb" }),
				className,
			])}
		/>
	</SwitchPrimitive.Root>
));
