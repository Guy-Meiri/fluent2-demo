return (
    <div data-testid="vscp-suggestions-header" className={classes.container}>
        <div className={classes.title}>
            <Label data-testid="vscp-header-title" size="large" weight="semibold">
                {t("copilot.createReplyInfo.content.title")}
            </Label>
            <InfoButton tooltipText={tooltipText} />
        </div>

        <div onMouseOver={() => setIsPromptHovered(true)} onMouseOut={() => setIsPromptHovered(false)} className={classes.content}>
            <div>
            <TooltipLabel label={concatenatedPrompt ?? ""}>
                <Body1 data-testid="vscp-header-prompt" truncate className={classes.description}>
                    {concatenatedPrompt}
                </Body1>
            </TooltipLabel>
            </div>
            {/* {isInHoverState  && */}
                {isFavoritePrompt ? (
                    <MonitoredButton
                        className={classes.star}
                        appearance="transparent"
                        // hidden={!isPromptHovered}
                        icon={isFavoriteHovered ? <StarOff20Filled /> : <StarOff20Regular />}
                        size="small"
                        onMouseOver={() => setFavoriteHovered(true)}
                        onMouseOut={() => setFavoriteHovered(false)}
                        buttonName={UserAction.FavoritePrompt}
                        onClick={() => dispatch(removePromptFromSavedPrompts(concatenatedPrompt!))}
                    />
                ) : (
                    <MonitoredButton
                        className={classes.star}
                        appearance="transparent"
                        icon={isFavoriteHovered ? <Star20Filled /> : <Star20Regular />}
                        disabled={savedPrompts.length >= MAX_SAVED_PROMPTS}
                        size="small"
                        onMouseOver={() => setIsFavoriteHovered(true)}
                        onMouseOut={() => setIsFavoriteHovered(false)}
                        buttonName={UserAction.FavoritePrompt}
                        onClick={() => dispatch(addPromptToSavedPrompts({ text: concatenatedPrompt }))}
                    />
                )}
                {/* ))} */}
        </div>
    </div>
);