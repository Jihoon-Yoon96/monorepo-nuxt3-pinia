<template>
    <button type="button">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
button { padding:0 .8em; border:0; border-radius:.3em; line-height:2em; cursor:pointer;
    outline:1px solid var(--background-subdued); background-color:var(--background-subdued); color:var(--foreground-normal-alt);
    &:hover { background-color:var(--border-subdued); box-shadow:var(--card-shadow)}
    &:active { background-color:var(--border-subdued)}
    &:disabled { outline-color:var(--background-subdued); background-color:var(--background-subdued); color:var(--foreground-subdued); box-shadow:none; cursor:no-drop;}

    /* primary */
    &.primary { outline-color:var(--primary); background-color:var(--primary); color:var(--primary-alt);
        &:hover { background-color:var(--primary-110)}
        &:active { background-color:var(--primary-125)}
        &:disabled { outline-color:var(--primary-50); background-color:var(--primary-50)}
    }
    /* secondary */
    &.secondary { outline-color:var(--secondary); background-color:var(--secondary); color:var(--secondary-alt);
        &:hover { background-color:var(--secondary-110)}
        &:active { background-color:var(--secondary-125)}
        &:disabled { outline-color:var(--secondary-50); background-color:var(--secondary-50)}
    }
    /* success */
    &.success { outline-color:var(--success); background-color:var(--success); color:var(--success-alt);
        &:hover { background-color:var(--success-110)}
        &:active { background-color:var(--success-125)}
        &:disabled { outline-color:var(--success-50); background-color:var(--success-50)}
    }
    /* warning */
    &.warning { outline-color:var(--warning); background-color:var(--warning); color:var(--warning-alt);
        &:hover { background-color:var(--warning-110)}
        &:active { background-color:var(--warning-125)}
        &:disabled { outline-color:var(--warning-50); background-color:var(--warning-50)}
    }
    /* danger */
    &.danger { outline-color:var(--danger); background-color:var(--danger); color:var(--danger-alt);
        &:hover { background-color:var(--danger-110)}
        &:active { background-color:var(--danger-125)}
        &:disabled { outline-color:var(--danger-); background-color:var(--danger-50)}
    }
}

button.line { outline-color:var(--foreground-normal-alt); background-color:var(--background-page); color:var(--foreground-normal-alt);
    /* primary */
    &.primary { outline-color:var(--primary); color:var(--primary);
        &:hover { background-color:var(--background-page); outline-color:var(--primary-110); color:var(--primary-110)}
        &:active { background-color:var(--background-page); outline-color:var(--primary-125); color:var(--primary-125)}
        &:disabled { background-color:var(--background-page); outline-color:var(--primary-50); color:var(--primary-50)}
    }
    /* secondary */
    &.secondary { outline-color:var(--secondary); color:var(--secondary);
        &:hover { background-color:var(--background-page); outline-color:var(--secondary-110); color:var(--secondary-110)}
        &:active { background-color:var(--background-page); outline-color:var(--secondary-125); color:var(--secondary-125)}
        &:disabled { background-color:var(--background-page); outline-color:var(--secondary-50); color:var(--secondary-50)}
    }
    /* success */
    &.success { outline-color:var(--success); color:var(--success);
        &:hover { background-color:var(--background-page); outline-color:var(--success-110); color:var(--success-110)}
        &:active { background-color:var(--background-page); outline-color:var(--success-125); color:var(--success-125)}
        &:disabled { background-color:var(--background-page); outline-color:var(--success-50); color:var(--success-50)}
    }
    /* warning */
    &.warning { outline-color:var(--warning); color:var(--warning);
        &:hover { background-color:var(--background-page); outline-color:var(--warning-110); color:var(--warning-110)}
        &:active { background-color:var(--background-page); outline-color:var(--warning-125); color:var(--warning-125)}
        &:disabled { background-color:var(--background-page); outline-color:var(--warning-50); color:var(--warning-50)}
    }
    /* danger */
    &.danger { outline-color:var(--danger); color:var(--danger);
        &:hover { background-color:var(--background-page); outline-color:var(--danger-110); color:var(--danger-110)}
        &:active { background-color:var(--background-page); outline-color:var(--danger-125); color:var(--danger-125)}
        &:disabled { background-color:var(--background-page); outline-color:var(--danger-50); color:var(--danger-50)}
    }
}
</style>
<script setup>
</script>