import time
from playwright.sync_api import sync_playwright

BASE_URL = "https://main.dxk14j7sxjg5l.amplifyapp.com/?noboot=true"

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # 1. Desktop Context (1440x900)
        context = browser.new_context(
            viewport={"width": 1440, "height": 900},
            device_scale_factor=2, # Retina 2x resolution
        )
        page = context.new_page()
        
        print("Navigating to live Amplify site...")
        page.goto(BASE_URL, wait_until="networkidle")
        page.wait_for_timeout(2000)

        # 01: Hero Desktop with Visible Hint
        print("Capturing 01_hero_desktop_hint.png...")
        page.screenshot(path="media/01_hero_desktop_hint.png", full_page=False)

        # 02: Open Security Lab Modal (The Creative Feature)
        print("Opening Security Lab modal...")
        hint_btn = page.locator('button:has-text("Security Lab")').first
        if hint_btn.is_visible():
            hint_btn.click()
            page.wait_for_timeout(1000)
            page.screenshot(path="media/02_security_lab_modal.png", full_page=False)

            # 03: Switch to IAM AST Linter Tab
            print("Switching to IAM AST Linter tab...")
            linter_tab = page.locator('button:has-text("Live IAM AST Linter")').first
            if not linter_tab.is_visible():
                linter_tab = page.locator('button:has-text("Linter")').first
            if linter_tab.is_visible():
                linter_tab.click()
                page.wait_for_timeout(1000)
                page.screenshot(path="media/03_iam_ast_linter.png", full_page=False)

            # Close modal with ESC
            page.keyboard.press("Escape")
            page.wait_for_timeout(600)

        # 04: Alabasta Sandboard Easter Egg Runner
        print("Navigating to Alabasta Sandboard Easter Egg...")
        page.evaluate("document.getElementById('fun-fact').scrollIntoView({ behavior: 'instant', block: 'center' })")
        page.wait_for_timeout(800)

        # Click Give Water & Skate to show the interactive runner
        skate_btn = page.locator('button:has-text("Give Water & Skate")').first
        if skate_btn.is_visible():
            skate_btn.click()
            page.wait_for_timeout(1200)

        page.screenshot(path="media/04_alabasta_sandboard_game.png", full_page=False)

        # 05: Dedicated AWS Challenge Architecture Section
        print("Capturing AWS Challenge Architecture...")
        page.evaluate("document.getElementById('aws-architecture').scrollIntoView({ behavior: 'instant', block: 'start' })")
        page.wait_for_timeout(1000)
        page.screenshot(path="media/05_aws_challenge_architecture.png", full_page=False)

        # 06: Grounded Student Journey & About Me
        print("Capturing About & Experience section...")
        page.evaluate("document.getElementById('about').scrollIntoView({ behavior: 'instant', block: 'start' })")
        page.wait_for_timeout(1000)
        page.screenshot(path="media/06_about_and_achievements.png", full_page=False)

        # 07: CachyOS Linux Terminal Drawer
        print("Opening CachyOS Terminal Drawer with Backquote...")
        page.keyboard.press("Backquote")
        page.wait_for_timeout(1000)
        page.screenshot(path="media/07_cachyos_terminal_drawer.png", full_page=False)
        page.keyboard.press("Escape")
        page.wait_for_timeout(500)

        context.close()

        # 08: Mobile Viewport (iPhone 14: 390x844)
        print("Capturing Mobile Responsive View (390x844)...")
        mobile_context = browser.new_context(
            viewport={"width": 390, "height": 844},
            device_scale_factor=2,
            is_mobile=True,
            has_touch=True,
        )
        mobile_page = mobile_context.new_page()
        mobile_page.goto(BASE_URL, wait_until="networkidle")
        mobile_page.wait_for_timeout(2000)
        mobile_page.screenshot(path="media/08_mobile_responsive_view.png", full_page=False)
        mobile_context.close()

        browser.close()
        print("All screenshots captured successfully into media/ folder!")

if __name__ == "__main__":
    run()
