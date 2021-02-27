import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadSideMask,
    faMitten, faHatWizard, faCircle } from "@fortawesome/free-solid-svg-icons";

export const FacemaskIcon: React.FC<{ available: boolean }>
= ({ available }) => available ?
<FontAwesomeIcon icon={faHeadSideMask} color="green" size="lg" /> :
<FontAwesomeIcon icon={faHeadSideMask} color="red" size="lg" />;

export const BeanieIcon: React.FC<{ available: boolean }>
= ({ available }) => available ?
<FontAwesomeIcon icon={faHatWizard} color="green" size="lg" /> :
<FontAwesomeIcon icon={faHatWizard} color="red" size="lg" />;

export const GlovesIcon: React.FC<{ available: boolean }>
= ({ available }) => available ?
<FontAwesomeIcon icon={faMitten} color="green" size="lg" /> :
<FontAwesomeIcon icon={faMitten} color="red" size="lg" />;

export const CircleIcon: React.FC<{ color: string, style?: string }>
= ({ color, style }) => <FontAwesomeIcon
icon={faCircle} color={color} size="sm" className={style} />;