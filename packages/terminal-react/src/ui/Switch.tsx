import React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { SwitchClass, type SwitchClassProps } from "@ui/cva";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface SwitchProps
	extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
	variant?: SwitchClassProps["variant"];
	size?: SwitchClassProps["size"];
}

export const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitive.Root>,
	SwitchProps
>(({ className, variant, size, ...props }, ref) => (
	<SwitchPrimitive.Root
		className={twMerge(
			SwitchClass({ size, variant, component: "root" }) as ClassNameValue,
			className
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitive.Thumb
			className={twMerge(
				SwitchClass({ size, variant, component: "thumb" }) as ClassNameValue,
				className
			)}
		/>
	</SwitchPrimitive.Root>
));
